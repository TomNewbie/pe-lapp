import { ExerciseType } from "../model/exercise";
import { Response } from "express";
import { AuthRequest } from "./auth";
import { exerciseService } from "../service/exercise";
import mongoose, { Types } from "mongoose";
import { fileService } from "../service/files";
const getAllExercises = (req: AuthRequest, res: Response) => {
  const { id } = req.params;
};

const createExercise = async (req: AuthRequest, res: Response) => {
  const { name, deadline, description } = req.body;
  const { id: courseId } = req.params;
  const lecturer = req.user!._id;
  const files = req.files as Express.Multer.File[];
  const filesFilter = files.map((file) => {
    return { name: file.originalname, url: file.filename };
  });
  if (!name) {
    res.status(400).send("Missing Name");
    fileService.remove(filesFilter.map((file) => file.url));
    return;
  }
  if (!description) {
    res.status(400).send("Missing Description");
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
    description,
    files: filesFilter,
    lecturer,
    name,
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

const editExercise = () => {};

const addGrade = () => {};

const deleteExercise = () => {};

export const exerciseController = {
  getAllExercises,
  createExercise,
  addGrade,
  deleteExercise,
  editExercise,
  getDetail,
};
