import { NextFunction, Response } from "express";
import { AuthRequest } from "./auth";
import { solutionService } from "../service/solution";
import { Exercise_ErrorType, exerciseService } from "../service/exercise";
import { FileRequest } from "./file";
import { FileType } from "../../utils/types";

const addGrade = async (req: AuthRequest, res: Response) => {
  const { grade } = req.body;
  const { id: exerciseId, studentId } = req.params;
  if (isNaN(grade)) {
    res.status(404).send("Grade must be a number");
    return;
  }
  const err = await solutionService.addGrade(
    exerciseId,
    studentId,
    parseInt(grade)
  );
  if (err === Exercise_ErrorType.NOT_FOUND) {
    res.status(404).send("Can not find solution to add grade");
    return;
  }
  res.sendStatus(204);
};
const verifyAuthorize = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user!.role === "lecturer") {
    res.status(401).send("Unauthorize");
    return;
  }
  const studentId = req.user!._id;
  const { id: exerciseId } = req.params;
  const err = await solutionService.verifyAuthorize(studentId, exerciseId);
  switch (err) {
    case Exercise_ErrorType.NOT_FOUND: {
      res
        .status(404)
        .send(`Exercise ${exerciseId} not found in student ${studentId}`);
      return;
    }
    case Exercise_ErrorType.SOLUTION_EXIST: {
      res.status(404).send(`Already send solution`);
      return;
    }
    case Exercise_ErrorType.INVALID_ID: {
      res.status(404).send(`Invalid exercise id`);
      return;
    }
  }

  next();
};
const submitSolution = async (req: FileRequest, res: Response) => {
  const studentId = req.user!._id;
  const { id: exerciseId } = req.params;
  const files = req.firebase as FileType[];
  if (files.length === 0) {
    res.status(404).send("Missing file");
    return;
  }
  await solutionService.submitSolution(studentId, exerciseId, files);
  res.sendStatus(201);
};
export const solutionController = { addGrade, submitSolution, verifyAuthorize };
