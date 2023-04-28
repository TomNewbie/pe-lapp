import { NextFunction, Request, Response } from "express";
import multer from "multer";
import path from "path";
import { AuthRequest } from "./auth";
import {
  allowed,
  fileFields,
  filePath,
  uploadLimit,
} from "../../config/upload";
import { statSync } from "fs";

const storage = multer.diskStorage({
  destination: filePath,
  filename: (req, file, callback) => {
    const { id } = req.params;
    const fileName = id + "_" + Date.now() + path.extname(file.originalname);
    callback(null, fileName);
  },
});

const handleUpload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    const ext = path.extname(file.originalname);
    if (!allowed.includes(ext)) {
      return callback(new Error(`File extension ${ext} is not supported`));
    }
    callback(null, true);
  },
  limits: uploadLimit,
}).array(fileFields);

const upload = async (req: AuthRequest, res: Response, next: NextFunction) => {
  handleUpload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err.code);
      res.status(400).send(err.code);
      return;
    } else if (err) {
      res.status(400).send(err.message);
    }
    // Everything went fine.
    next();
  });
};
const send = (req: AuthRequest, res: Response, next: NextFunction) => {
  // const path = req.params.path;
  const path =
    "/home/zeboi/Documents/project/vgupe2023_team2/server/upload/123-1682658538658.pdf";
  res.sendFile(path);
};
const text = () => {
  // const dirName = "mydir";
  // const fileName = "myfile.txt";
  // const filePath = path.join(__dirname, fileName);
  // console.log(filePath);
  // const path = "hello/123-1682655726540.jpg";
  // const stat = statSync(path);
  // console.log(stat);
};
text();
export const fileController = { upload, send };

const deleteByPath = () => {};
