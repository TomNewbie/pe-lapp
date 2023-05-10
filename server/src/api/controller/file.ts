import { NextFunction, Request, Response } from "express";
import multer from "multer";
import { AuthRequest } from "./auth";

import { fileService } from "../service/files";
import { filePath } from "../../config/upload";
import { join } from "path";
import { existsSync } from "fs";

import { FileType } from "../../utils/types";

const getFile = (req: AuthRequest, res: Response, next: NextFunction) => {
  fileService.handleUpload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // console.log(err.code);
      res.status(400).send(err.code);
      return;
    } else if (err) {
      res.status(400).send(err.message);
      return;
    }
    next();
  });
};
export interface FileRequest extends AuthRequest {
  firebase?: FileType[];
}
const upload = async (req: FileRequest, res: Response, next: NextFunction) => {
  const files = req.files as Express.Multer.File[];
  if (!files) {
    res.status(404).send("Missing files field");
    return;
  }
  if (files.length === 0) {
    next(); // no file in upload
  }
  const fileFilters = files.filter((file) => file.buffer);
  req.firebase = await fileService.uploadFirebase(fileFilters);
  next();
};
const remove = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const { remove } = req.body;

  const err = await fileService.removeFirebase(remove);
  if (err) {
    res.status(500).send(err);
    return;
  }
  res.sendStatus(200);
};

const get = (req: AuthRequest, res: Response) => {
  const { url } = req.params;
  const fullUrl = join(filePath, url);
  if (!existsSync(fullUrl)) {
    res.sendStatus(404);
    return;
  }
  res.status(200).sendFile(fullUrl);
};
export const fileController = { upload, getFile, remove, get };
