import mongoose from "mongoose";
import { Exercise, ExerciseType } from "../model/exercise";
import { Solution } from "../model/solution";

interface File {
  url: string;
  name: string;
}
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
  file: File[]
): Promise<void> => {
  await Solution.create({
    _id: { student: studentId, exercise: exerciseId },
    files: file,
  });
};
// const getAllExercise = async (role: "student", courseId)
export const exerciseService = { create, verifyAuthorize, createSolution };
