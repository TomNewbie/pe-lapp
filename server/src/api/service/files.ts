import multer from "multer";
import path, { join } from "path";
import { unlink } from "fs/promises";

import {
  allowed,
  fileFields,
  filePath,
  uploadLimit,
} from "../../config/upload";
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
const remove = async (remove: string[]): Promise<void | string> => {
  if (!remove) return;
  try {
    await Promise.all(remove.map((url: string) => unlink(join(filePath, url))));
  } catch (error) {
    return "file not exist";
  }
};

export const fileService = { handleUpload, remove };
