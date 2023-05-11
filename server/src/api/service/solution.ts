import { FileType } from "../../utils/types";
import { Solution } from "../model/solution";
import { Exercise_ErrorType } from "./exercise";

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
const addGrade = async (
  exerciseId: string,
  studentId: string,
  grade: number
) => {
  const result = await Solution.updateOne(
    { "_id.student": studentId, "_id.exercise": exerciseId },
    { grade }
  );
  if (result.matchedCount === 0) return Exercise_ErrorType.NOT_FOUND;
};
export const solutionService = {
  createSolution,
  addGrade,
};
