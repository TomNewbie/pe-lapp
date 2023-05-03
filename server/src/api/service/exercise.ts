import { Exercise, ExerciseType } from "../model/exercise";

const create = async (
  exercise: Omit<ExerciseType, "createdAt" | "updatedAt">
) => {
  const a = await Exercise.create(exercise);
  console.log(a);
};
export const exerciseService = { create };
