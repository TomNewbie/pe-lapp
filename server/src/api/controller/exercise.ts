import { Exercise, ExerciseType } from "../model/exercise";
import { NextFunction, Response } from "express";
import { AuthRequest } from "./auth";
import {
  Exercise_ErrorType,
  LecturerViewExercise,
  StudentViewExercise,
  exerciseService,
} from "../service/exercise";
import mongoose, { Types } from "mongoose";
import { fileService } from "../service/files";
import { FileType } from "../../utils/types";
import { FileRequest } from "./file";
import { queryToNumber } from "../../utils";
const getAllExercises = async (req: AuthRequest, res: Response) => {
  const { id: courseId } = req.params;
  const { role, _id: userId } = req.user!;
  let result:
    | StudentViewExercise
    | LecturerViewExercise
    | Exercise_ErrorType.NOT_FOUND;
  if (role === "lecturer") {
    result = await exerciseService.getLecturerViewExercise(courseId, userId);
  } else {
    result = await exerciseService.getStudentViewExercise(courseId, userId);
  }
  res.status(200).json(result);
};

const createExercise = async (req: FileRequest, res: Response) => {
  const { name, deadline, description } = req.body;
  const { id: courseId } = req.params;
  const lecturer = req.user!._id;
  const files = req.firebase as FileType[];
  if (!name) {
    res.status(400).send("Missing name");
    fileService.removeFirebase(files.map((file) => file.refPath));
    return;
  }
  if (!description) {
    res.status(400).send("Missing description");
    fileService.removeFirebase(files.map((file) => file.refPath));
    return;
  }
  if (!deadline) {
    res.status(400).send("Missing Deadline");
    fileService.removeFirebase(files.map((file) => file.refPath));
    return;
  }
  await exerciseService.create({
    course: new mongoose.Types.ObjectId(courseId),
    deadline,
    description,
    files,
    lecturer,
    name,
  });
  res.sendStatus(200);
};

const getDetail = async (req: AuthRequest, res: Response) => {
  const { id: exerciseId } = req.params;
  const { role, _id: userId } = req.user!;
  let result;
  if (role === "lecturer") {
    result = await exerciseService.getLecturerViewDetail(exerciseId, userId);
  } else {
    result = await exerciseService.getStudentViewDetail(exerciseId, userId);
  }
  if (result === Exercise_ErrorType.NOT_FOUND) {
    res.status(404).send(`Exercise not found`);
    return;
  }
  res.status(200).json(result);
};

const remove = async (req: AuthRequest, res: Response) => {
  const { id: exerciseId } = req.params;
  const filesRemoveRefPath = await exerciseService.getAllFilePath(exerciseId);
  await Promise.all([
    fileService.removeFirebase(filesRemoveRefPath),
    exerciseService.remove(exerciseId),
  ]);
  res.sendStatus(204);
};
const update = async (req: FileRequest, res: Response) => {
  const { name, description, deadline } = req.body;
  let { remove } = req.body;
  const { id } = req.params;
  // if user dont remove anything remove will become undefined
  remove = remove ? remove : [];
  const files = await exerciseService.updateExercise(
    id,
    {
      name,
      description,
      deadline,
    },
    remove
  );
  const filesRemoveRefPath = files
    .filter((file) => remove.includes(file.url))
    .map((file) => file.refPath);
  // if no new file upload then return status
  if (!req.firebase) {
    await fileService.removeFirebase(filesRemoveRefPath);
    res.sendStatus(204);
    return;
  }
  const newFiles = req.firebase as FileType[];
  // add new files and remove the old files
  const result = await Promise.all([
    exerciseService.addNewFiles(id, newFiles),
    fileService.removeFirebase(filesRemoveRefPath),
  ]);
  // console.log(result);
  res.sendStatus(204);
};
const verifyAuthorize = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const lecturerId = req.user!._id;
  const { id: exerciseId } = req.params;
  if (req.user!.role === "student") {
    res.status(401).send("Unauthorize");
    return;
  }
  const err = await exerciseService.verifyAuthorize(lecturerId, exerciseId);
  if (err === Exercise_ErrorType.NOT_FOUND) {
    res
      .status(401)
      .send(`Can not find exercise ${exerciseId} that ${lecturerId} created`);
    return;
  }
  if (err === Exercise_ErrorType.INVALID_ID) {
    res.status(401).send(`Invalid exercise id`);
    return;
  }
  next();
};

const getGrades = async (req: AuthRequest, res: Response) => {
  const { _id: lecturerId, role } = req.user!;
  const { id: courseId } = req.params;

  if (role === "student") {
    return res.sendStatus(401);
  }

  const { s, n } = req.query;
  const options = {
    start: queryToNumber(s),
    num: queryToNumber(n),
  };

  const result = await exerciseService.getGrades(
    { lecturerId, courseId },
    options
  );
  if (result === Exercise_ErrorType.NOT_FOUND) {
    return res
      .status(404)
      .send(`Cannot find course "${courseId}" created by you`);
  }

  res.json(result);
};

export const exerciseController = {
  getAllExercises,
  createExercise,
  remove,
  update,
  getDetail,
  verifyAuthorize,
  getGrades,
};
