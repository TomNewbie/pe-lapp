import { NextFunction, Request, Response } from "express";
import { contentService } from "../service/content";
import { AuthRequest } from "./auth";
import { CourseError, courseService } from "../service/course";

const createContent = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { _id: lecturerId } = req.user!;
  const { id: courseId } = req.params;
  const { title, body } = req.body;
  if (!title) {
    res.status(400).send("Missing Title");
  }
  if (!body) {
    res.status(400).send("Missing Body");
  }
  const files = req.files as Express.Multer.File[];
  const filesFilter = files.map((file) => {
    return { name: file.originalname, url: file.filename };
  });
  const contentId = await contentService.create({
    title,
    file: filesFilter,
    body,
  });
  await courseService.addContent({ lecturerId, courseId }, contentId!);
  res.sendStatus(200);
};
const verifyAuthorize = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { id: courseId } = req.params;
  const { _id: lecturerId } = req.user!;
  const err = await courseService.verifyAuthorize({ lecturerId, courseId });
  if (err === CourseError.NOT_FOUND) {
    res
      .status(404)
      .send(`Cannot find course "${courseId}" created by you to upload`);
    return;
  }
  next();
};
export const contentController = { createContent, verifyAuthorize };
