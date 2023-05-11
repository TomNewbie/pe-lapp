import mongoose, { Types } from "mongoose";
import { Exercise, ExerciseType } from "../model/exercise";
import { Solution } from "../model/solution";
import { FileType } from "../../utils/types";

const create = async (
  exercise: Omit<ExerciseType, "createdAt" | "updatedAt">
) => {
  const a = await Exercise.create(exercise);
  console.log(a);
};
const verifyAuthorize = async (studentId: string, exerciseId: string) => {
  const [exercise] = await Exercise.aggregate()
    .match({ _id: new mongoose.Types.ObjectId(exerciseId) })
    .lookup({
      from: "courses",
      localField: "course",
      foreignField: "_id",
      as: "course",
    })
    .match({ "course.participants": studentId });
  if (!exercise) return Exercise_ErrorType.NOT_FOUND;
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
export type LecturerViewDetail = Array<{
  name: string;
  deadline: Date;
  description: string;
  exercise_files: Array<string>;
  solutions: Array<{
    student: {
      name: string;
      id: string;
    };
    submit_time: Date;
    file: FileType;
    grade?: number;
  }>;
}>;
const getLecturerViewDetail = async (
  exerciseId: string,
  lecturerId: string
) => {
  const [exercises] = await Exercise.aggregate()
    .match({
      _id: new Types.ObjectId(exerciseId),
      lecturer: lecturerId,
    })
    .lookup({
      from: "solutions",
      localField: "_id",
      foreignField: "_id.exercise",
      as: "solutionFields",
    })
    .unwind("solutionFields")
    .lookup({
      from: "students",
      localField: "solutionFields._id.student",
      foreignField: "_id",
      as: "students",
    })
    .unwind("students")
    .project({
      _id: 1,
      name: 1,
      deadline: 1,
      description: 1,
      exercise_files: "$files",
      student: { name: "$students.name", id: "$students._id" },
      submit_time: "$solutionFields.createdAt",
      file: "$solutionFields.files",
      grade: "$solutionFields.grade",
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
  if (!exercises) return Exercise_ErrorType.NOT_FOUND;
  const result = { ...exercises._id, solutions: exercises.solutions };
  return result;
};
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
    return Exercise_ErrorType.NOT_FOUND;
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
  if (exercises.length === 0) {
    return Exercise_ErrorType.NOT_FOUND;
  }
  return exercises;
};
// console.log("asdasdasd");
// getLecturerViewDetail("6453e5b3c027dda9947cc2de", "god");
// getStudentViewExercise("6435878ffd053fc269ba4c89", "huhu");
// getLecturerViewExercise("6435878ffd053fc269ba4c89", "god");
// getStudentViewDetail("6453e5b3c027dda9947cc2de", "17232");

const verifyOwner = async (lecturerId: string, exerciseId: string) => {
  const result = await Exercise.findOne({
    _id: exerciseId,
    lecturer: lecturerId,
  });
  if (!result) return Exercise_ErrorType.NOT_FOUND;
};
// addGrade("6453e5b3c027dda9947cc2de", "huhu", 70);
const getAllFilePath = async (exerciseId: string) => {
  // get all ref path in exercise solution
  const result = await Exercise.aggregate()
    .match({
      _id: new Types.ObjectId(exerciseId),
    })
    .lookup({
      from: "solutions",
      localField: "_id",
      foreignField: "_id.exercise",
      as: "solution",
    })
    .unwind("files")
    .project({ solution: 1, _id: 0 });
  // const result = await CourseContent.findOne({ _id: contentId });
  // return result;
  console.log(result);
};
getAllFilePath("645bd287b84013ab0df85f3e");
export const exerciseService = {
  create,
  verifyAuthorize,
  update,
  getStudentViewExercise,
  getLecturerViewExercise,
  getLecturerViewDetail,
  getStudentViewDetail,
  verifyOwner,
  getAllFilePath,
};
