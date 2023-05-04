import mongoose from "mongoose";
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
    body,
    title,
  }: Omit<ExerciseType, "createdAt" | "updatedAt" | "course" | "lecturer">
) => {
  const result = await Exercise.updateOne(
    { _id: exerciseId },
    { files, deadline, body, title }
  );
  // return result;
};
// const getAllExercise = async (role: "student", courseId)
export const exerciseService = {
  create,
  verifyAuthorize,
  createSolution,
  update,
};
