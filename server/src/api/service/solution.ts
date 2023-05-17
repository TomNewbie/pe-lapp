import mongoose, { isValidObjectId } from "mongoose";
import { FileType } from "../../utils/types";
import { Exercise } from "../model/exercise";
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
const verifyAuthorize = async (studentId: string, exerciseId: string) => {
  if (!isValidObjectId(exerciseId)) return Exercise_ErrorType.INVALID_ID;
  const [exercise] = await Exercise.aggregate()
    .match({ _id: new mongoose.Types.ObjectId(exerciseId) })
    .lookup({
      from: "courses",
      localField: "course",
      foreignField: "_id",
      as: "course",
    })
    .match({ "course.participants": studentId })
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
    .project({ solution: 1 });
  console.log(exercise.solution.length);
  if (!exercise) return Exercise_ErrorType.NOT_FOUND;
  if (!(exercise.solution.length === 0))
    return Exercise_ErrorType.SOLUTION_EXIST;
};
// const isSolutionExist = async (studentId: string, exerciseId: string) => {
//     const solution = await Solution.findOne({
//       "_id.exercise": exerciseId,
//       "_id.student": studentId,
//     });
//     if(solution)
//   };
// verifyAuthorize("17232", "645bd242b0f0e5f82d1ad856");
export const solutionService = {
  createSolution,
  addGrade,
  verifyAuthorize,
};
