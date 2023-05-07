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
  if (!exercise) return "Exercise not found";
};

const createSolution = async (
  studentId: string,
  exerciseId: string,
  file: FileType[]
): Promise<void> => {
  await Solution.create({
    _id: { student: studentId, exercise: exerciseId },
    files: file,
  });
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
// type LecturerViewExercise = Array<{
//   name: string;
//   deadline: Date;
//   description:
//   grade?: number;
//   submitted: boolean;
//   execise_files: FileType;
//   solution_files?: FileType;
// }>;
const getExercise = async () => {};
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
      participant_count: { $size: "$solution" },
    })
    .project({
      name: 1,
      _id: 1,
      deadline: 1,
      participant_count: 1,
    });
  if (exercises.length === 0) {
    return Exercise_ErrorType.NOT_FOUND;
  }
  return exercises;
};
// console.log("asdasdasd");
// // getLecturerViewExercise("6435878ffd053fc269ba4c80", "god");
// getStudentViewExercise("6435878ffd053fc269ba4c89", "huhu");
export const exerciseService = {
  create,
  verifyAuthorize,
  createSolution,
  update,
  getStudentViewExercise,
  getLecturerViewExercise,
};
