import { NextFunction, Request, Response } from "express";
import multer from "multer";
import { AuthRequest } from "./auth";

import { fileService } from "../service/files";
import { filePath } from "../../config/upload";
import { join } from "path";
import { existsSync } from "fs";

const upload = (req: AuthRequest, res: Response, next: NextFunction) => {
  fileService.handleUpload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err.code);
      res.status(400).send(err.code);
      return;
    } else if (err) {
      res.status(400).send(err.message);
      return;
    }
    next();
  });
};

const remove = (req: AuthRequest, res: Response, next: NextFunction) => {
  const { remove } = req.body;
  const error = fileService.remove(remove);
  if (error) {
    res.status(500).send(error);
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
export const fileController = { upload, remove, get };
