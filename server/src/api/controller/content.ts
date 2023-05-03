import { NextFunction, Request, Response } from "express";
import { ContentError, contentService } from "../service/content";
import { AuthRequest } from "./auth";
import { CourseError, courseService } from "../service/course";
import { fileService } from "../service/files";
import { error } from "console";
import { fileController } from "./file";

const create = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const { id: courseId } = req.params;
  const { title, body } = req.body;
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
    res.status(400).send("Missing Body");
    fileService.remove(filesFilter.map((file) => file.url));
    return;
  }
  const contentId = await contentService.create({
    title,
    files: filesFilter,
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
    res.status(404).send("Unauthorized");
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
    res.status(404).send("Unauthorized");
    return;
  }
  next();
};
interface FileType {
  name: string;
  url: string;
}
const update = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const { remove, title, files, body } = req.body;
  const { course_content_id } = req.params;

  await fileService.remove(remove);
  // delete all files in remove
  let updateFiles = files.filter(
    (file: FileType) => !remove.includes(file.url)
  );
  // if user dont upload new file
  if (!req.files) {
    await contentService.update(course_content_id, {
      title,
      body,
      files: updateFiles,
    });
    res.sendStatus(200);
    return;
  }
  const newFiles = (req.files as Express.Multer.File[]).map((file) => {
    return { name: file.originalname, url: file.filename };
  });
  // add new files
  updateFiles = updateFiles.concat(newFiles);
  await contentService.update(course_content_id, {
    title,
    body,
    files: updateFiles,
  });
  res.sendStatus(200);
};

const remove = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const { id: courseId, course_content_id } = req.params;
  const filePaths = await contentService.getAllFilePath(course_content_id);

  try {
    await Promise.all([
      contentService.remove(course_content_id),
      courseService.removeContent(courseId, course_content_id),
      fileService.remove(filePaths.map(({ files }) => files.url)),
    ]);
    res.sendStatus(200);
  } catch (error) {}
  next(error);
};

export const contentController = {
  create,
  verifyAuthorize,
  update,
  remove,
};
