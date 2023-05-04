import { ExerciseType } from "../model/exercise";
import { NextFunction, Response } from "express";
import { AuthRequest } from "./auth";
import { exerciseService } from "../service/exercise";
import mongoose, { Types } from "mongoose";
import { fileService } from "../service/files";
import { FileType } from "../../utils/types";
const getAllExercises = (req: AuthRequest, res: Response) => {
  const { id } = req.params;
};

const createExercise = async (req: AuthRequest, res: Response) => {
  const { title, deadline, body } = req.body;
  const { id: courseId } = req.params;
  const lecturer = req.user!._id;
  const files = req.files as Express.Multer.File[];
  const filesFilter = files.map((file) => {
    return { name: file.originalname, url: file.filename };
  });
  if (!title) {
    res.status(400).send("Missing Title");
    fileService.remove(filesFilter.map((file) => file.url));
    return;
  }
  if (!body) {
    res.status(400).send("Missing body");
    fileService.remove(filesFilter.map((file) => file.url));
    return;
  }
  if (!deadline) {
    res.status(400).send("Missing Deadline");
    fileService.remove(filesFilter.map((file) => file.url));
    return;
  }
  // const result = await
  await exerciseService.create({
    course: new mongoose.Types.ObjectId(courseId),
    deadline,
    body,
    files: filesFilter,
    lecturer,
    title,
  });
  // const contentId = await contentService.create({
  //   title,
  //   files: filesFilter,
  //   body,
  // });
  // await courseService.addContent(courseId, contentId!);
  res.sendStatus(200);
};

const getDetail = () => {};

const editExercise = async (req: AuthRequest, res: Response) => {
  const { remove, title, files, body, deadline } = req.body;
  const { id: exerciseId } = req.params;

  await fileService.remove(remove);
  // delete all files in remove
  let updateFiles = files.filter(
    (file: FileType) => !remove.includes(file.url)
  );
  // if user dont upload new file
  if (!req.files) {
    await exerciseService.update(exerciseId, {
      title,
      body,
      files: updateFiles,
      deadline,
    });
    res.sendStatus(200);
    return;
  }
  const newFiles = (req.files as Express.Multer.File[]).map((file) => {
    return { name: file.originalname, url: file.filename };
  });
  // add new files
  updateFiles = updateFiles.concat(newFiles);
  await exerciseService.update(exerciseId, {
    title,
    body,
    files: updateFiles,
    deadline,
  });
  res.sendStatus(200);
};

const addGrade = () => {};

const deleteExercise = () => {};
const verifyAuthorize = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user!.role === "lecturer") {
    res.status(401).send("Unauthorize");
  }
  const studentId = req.user!._id;
  const { id: exerciseId } = req.params;
  const err = await exerciseService.verifyAuthorize(studentId, exerciseId);
  if (err) {
    res.status(404).send(err);
    return;
  }
  next();
};
const createSolution = async (req: AuthRequest, res: Response) => {
  const studentId = req.user!._id;
  const { id: exerciseId } = req.params;
  const files = req.files as Express.Multer.File[];
  if (files.length === 0) {
    res.status(404).send("Missing file");
    return;
  }
  const filesFilter = files.map((file) => {
    return { name: file.originalname, url: file.filename };
  });
  await exerciseService.createSolution(studentId, exerciseId, filesFilter);
  res.sendStatus(201);
};
export const exerciseController = {
  verifyAuthorize,
  createSolution,
  getAllExercises,
  createExercise,
  addGrade,
  deleteExercise,
  editExercise,
  getDetail,
};
