import mongoose, { Types } from "mongoose";
import { Exercise, ExerciseType } from "../model/exercise";
import { Solution, SolutionType } from "../model/solution";
import { FileType } from "../../utils/types";

const create = async (
  exercise: Omit<ExerciseType, "createdAt" | "updatedAt">
) => {
  const a = await Exercise.create(exercise);
  console.log(a);
};

const update = async (
  exerciseId: string,
  {
    files,
    deadline,
    description,
    name,
  }: Omit<ExerciseType, "createdAt" | "updatedAt" | "course" | "lecturer">
) => {
  const result = await Exercise.updateOne(
    { _id: exerciseId },
    { files, deadline, description, name }
  );
  // return result;
};
export enum Exercise_ErrorType {
  NOT_FOUND,
  SOLUTION_EXIST,
}
export type StudentViewExercise = Array<{
  name: string;
  _id: string;
  deadline: Date;
  grade?: number;
  submitted: boolean;
}>;
export type LecturerViewExercise = Array<{
  name: string;
  _id: string;
  deadline: Date;
  participant_count: number;
}>;
export type StudentViewDetail = {
  _id: string;
  name: string;
  deadline: Date;
  grade?: number;
  submitted: boolean;
  description: string;
  exercise_files: Array<FileType>;
  solution_files?: FileType;
};

type studentSolution = {
  student: {
    name: string;
    id: string;
  };
  submit_time?: Date;
  file?: Array<Omit<FileType, "refPath">>;
  grade?: number;
};
type lectureViewDetail = {
  name: string;
  deadline: Date;
  description: string;
  exercise_files: Array<Omit<FileType, "refPath">>;
  solutions: Array<studentSolution>;
};
const getLecturerViewDetail = async (
  exerciseId: string,
  lecturerId: string
): Promise<lectureViewDetail> => {
  const [exercise] = await Exercise.aggregate()
    .match({
      _id: new Types.ObjectId(exerciseId),
      lecturer: lecturerId,
    })
    .lookup({
      from: "courses",
      foreignField: "_id",
      localField: "course",
      as: "course",
    })
    .unwind("course")
    .lookup({
      from: "students",
      localField: "course.participants",
      foreignField: "_id",
      as: "students",
    })
    .unwind("students")
    .lookup({
      from: "solutions",
      let: { exerciseId: "$_id", studentId: "$students._id" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ["$_id.exercise", "$$exerciseId"] },
                { $eq: ["$_id.student", "$$studentId"] },
              ],
            },
          },
        },
      ],
      as: "solution",
    })
    .project({
      _id: 1,
      name: 1,
      deadline: 1,
      description: 1,
      exercise_files: {
        $map: {
          input: "$files",
          as: "files",
          in: {
            name: "$$files.name",
            url: "$$files.url",
          },
        },
      },
      student: { name: "$students.name", id: "$students._id" },
      submit_time: "$solution.createdAt",
      file: "$solution.files",
      grade: "$solution.grade",
      solution: 1,
    })
    .group({
      _id: {
        name: "$name",
        deadline: "$deadline",
        description: "$description",
        exercise_files: "$exercise_files",
      },
      solutions: {
        $push: {
          student: "$student",
          submit_time: "$submit_time",
          file: "$file",
          grade: "$grade",
        },
      },
    });

  const filterSolutions = exercise.solutions.map(
    (solution: {
      student: {
        name: string;
        id: string;
      };
      submit_time?: Date[];
      file?: FileType[];
      grade?: number[];
    }) => {
      if (!solution.submit_time![0]) {
        const { student } = solution;

        return { student: student };
      }
      return {
        ...solution,
        submit_time: solution.submit_time![0],
        file: solution.file![0],
        grade: solution.grade![0] ? solution.grade![0] : null,
      };
    }
  );
  return { ...exercise._id, solutions: filterSolutions };
};
// getLecturerViewDetail("645bd287b84013ab0df85f3e", "god");
// getLecturerViewDetail("6451f42211a6cb2c92fcef3e", "god");
const getStudentViewDetail = async (exerciseId: string, studentId: string) => {
  const [exercises] = await Exercise.aggregate()
    .match({
      _id: new Types.ObjectId(exerciseId),
    })
    .addFields({ studentId: studentId })
    .lookup({
      from: "solutions",
      let: { exerciseId: "$_id", studentId: "$studentId" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ["$_id.exercise", "$$exerciseId"] },
                { $eq: ["$_id.student", "$$studentId"] },
              ],
            },
          },
        },
      ],
      as: "solution",
    })
    .project({
      name: 1,
      _id: 0,
      description: 1,
      solution: 1,
      deadline: 1,
      exercise_files: "$files",
    });
  if (!exercises) {
    return Exercise_ErrorType.NOT_FOUND;
  }
  if (exercises.solution.length === 0) {
    exercises.submitted = false;
    delete exercises.solution;
    return exercises;
  }
  exercises.submitted = true;
  exercises.grade = exercises.solution[0].grade;
  exercises.solution_files = exercises.solution[0].files;
  delete exercises.solution;
  return exercises;
};
const getStudentViewExercise = async (
  courseId: string,
  studentId: string
): Promise<StudentViewExercise | Exercise_ErrorType.NOT_FOUND> => {
  const exercises = await Exercise.aggregate()
    .match({
      course: new Types.ObjectId(courseId),
    })
    .addFields({ studentId: studentId })
    .lookup({
      from: "solutions",
      let: { exerciseId: "$_id", studentId: "$studentId" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ["$_id.exercise", "$$exerciseId"] },
                { $eq: ["$_id.student", "$$studentId"] },
              ],
            },
          },
        },
      ],
      as: "solution",
    })
    .project({
      name: 1,
      deadline: 1,
      _id: 1,
      solution: 1,
    });
  if (exercises.length === 0) {
    return exercises;
  }
  const filterExercises = exercises.map((exercise) => {
    if (exercise.solution.length === 0) {
      exercise.submitted = false;
      delete exercise.solution;
      return exercise;
    }
    exercise.grade = exercise.solution.grade;
    exercise.submitted = true;
    delete exercise.solution;
    return exercise;
  });
  return filterExercises;
};
const getLecturerViewExercise = async (
  courseId: string,
  lecturerId: string
) => {
  const exercises = await Exercise.aggregate()
    .match({
      course: new Types.ObjectId(courseId),
      lecturer: lecturerId,
    })
    .lookup({
      from: "solutions",
      localField: "_id",
      foreignField: "_id.exercise",
      as: "solution",
    })
    .addFields({
      submission_count: { $size: "$solution" },
    })
    .project({
      name: 1,
      _id: 1,
      deadline: 1,
      submission_count: 1,
    });
  console.log(exercises);

  return exercises;
};
// console.log("asdasdasd");
// getLecturerViewDetail("6453e5b3c027dda9947cc2de", "god");
// getStudentViewExercise("6435878ffd053fc269ba4c89", "huhu");
// getLecturerViewExercise("6435878ffd053fc269ba4c89", "god");
// getStudentViewDetail("6453e5b3c027dda9947cc2de", "17232");

const verifyAuthorize = async (lecturerId: string, exerciseId: string) => {
  const result = await Exercise.findOne({
    _id: exerciseId,
    lecturer: lecturerId,
  });
  if (!result) return Exercise_ErrorType.NOT_FOUND;
};
// addGrade("6453e5b3c027dda9947cc2de", "huhu", 70);
const getAllFilePath = async (exerciseId: string): Promise<string[]> => {
  // get all ref path in exercise solution
  const [result] = await Exercise.aggregate()
    .match({
      _id: new Types.ObjectId(exerciseId),
    })
    .lookup({
      from: "solutions",
      localField: "_id",
      foreignField: "_id.exercise",
      as: "solution",
    })
    .project({ "solution.files": 1, files: 1, _id: 0 });

  const filesRef = result.files.map((file: FileType) => file.refPath);
  result.solution.forEach((solution: { files: FileType[] }) => {
    solution.files.forEach((file) => {
      console.log(file);
      filesRef.push(file.refPath);
    });
  });
  return filesRef;
};
const remove = async (exerciseId: string) =>
  await Exercise.deleteOne({ _id: exerciseId });
// getAllFilePath("645bd287b84013ab0df85f3e");
type updateExerciseType = Omit<
  Partial<ExerciseType>,
  "updatedAt" | "createdAt" | "files"
>;
const updateExercise = async (
  exerciseId: string,
  exercise: updateExerciseType,
  removeFiles: string[]
) =>
  // : Omit<CourseContentType, "createdAt" | "updatedAt">
  {
    let update: {
      $set: {
        [key in keyof updateExerciseType]?: string;
      };
      $pull: {
        files?: {
          url: string[];
        };
      };
    } = {
      $set: {},
      $pull: { files: { url: removeFiles } },
    };

    // Iterate over request body and add fields to update object
    for (const [key, value] of Object.entries(exercise)) {
      if (value !== undefined) {
        update.$set[key as keyof updateExerciseType] = value as string;
      }
    }
    console.log(update);
    const result = await Exercise.findOneAndUpdate(
      { _id: exerciseId },
      update,
      { returnDocument: "before", projection: "files" }
    );

    return result!.files;
  };
const addNewFiles = async (exerciseId: string, files: FileType[]) => {
  await Exercise.updateOne(
    { _id: exerciseId },
    { $addToSet: { files: files } }
  );
};
export const exerciseService = {
  create,
  verifyAuthorize,
  remove,
  update,
  getStudentViewExercise,
  getLecturerViewExercise,
  getLecturerViewDetail,
  getStudentViewDetail,
  getAllFilePath,
  updateExercise,
  addNewFiles,
};
