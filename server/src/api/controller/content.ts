import { NextFunction, Request, Response } from "express";
import { ContentError, contentService } from "../service/content";
import { AuthRequest } from "./auth";
import { courseService } from "../service/course";
import { fileService } from "../service/files";
import { FileRequest } from "./file";
import { FileType } from "../../utils/types";

const create = async (req: FileRequest, res: Response, next: NextFunction) => {
  const { id: courseId } = req.params;
  const { title, body } = req.body;
  const files = req.firebase as FileType[];
  if (!title) {
    res.status(400).send("Missing Title");
    fileService.removeFirebase(files.map((file) => file.refPath));
    return;
  }
  if (!body) {
    res.status(400).send("Missing Body");
    fileService.removeFirebase(files.map((file) => file.refPath));
    return;
  }
  const contentId = await contentService.create({
    title,
    files,
    body,
  });
  await courseService.addContent(courseId, contentId!);
  res.sendStatus(200);
};
const verifyAuthorize = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user!.role !== "lecturer") {
    res.status(401).send("Unauthorized");
    return;
  }
  const { id: courseId, course_content_id: contentId } = req.params;
  const lecturerId = req.user!._id;
  const err = await contentService.verifyAuthorize(
    contentId,
    courseId,
    lecturerId
  );
  if (err === ContentError.NOT_FOUND) {
    res.status(404).send("Content not found");
    return;
  }
  next();
};

const update = async (req: FileRequest, res: Response) => {
  const { remove, title, body } = req.body;
  const { course_content_id } = req.params;
  // delete all files in remove
  // let updateFiles = files.filter(
  //   (file: FileType) => !remove.includes(file.refPath)
  // );
  // if user dont upload new file
  const filesRemove = await contentService.update(
    course_content_id,
    {
      title,
      body,
    },
    remove
  );
  await fileService.removeFirebase(filesRemove.map((file) => file.refPath));

  // res.sendStatus(200);

  // const newFiles = req.firebase as FileType[];
  // // add new files
  // updateFiles = updateFiles.concat(newFiles);
  // await contentService.update(course_content_id, {
  //   title,
  //   body,
  //   files: updateFiles,
  // });
  // res.sendStatus(200);
};

const remove = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const { id: courseId, course_content_id } = req.params;
  const filePaths = await contentService.getAllFilePath(course_content_id);

  try {
    await Promise.all([
      contentService.remove(course_content_id),
      courseService.removeContent(courseId, course_content_id),
      fileService.removeFirebase(filePaths.map(({ files }) => files.refPath)),
    ]);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

export const contentController = {
  create,
  verifyAuthorize,
  update,
  remove,
};
