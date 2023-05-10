import multer from "multer";
import path, { join } from "path";
import { unlink } from "fs/promises";

import {
  allowed,
  fileFields,
  filePath,
  uploadLimit,
} from "../../config/upload";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storageRef } from "../../config/firebase";
import { randomUUID } from "crypto";
import { NewFileType } from "../../utils/types";

const storage = multer.memoryStorage();
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
const uploadFirebase = async (
  files: Express.Multer.File[]
): Promise<NewFileType[] | undefined> => {
  const metadata = {
    contentType: files[0].mimetype,
  };
  let snapshots = await Promise.all(
    files.map((file) =>
      uploadBytes(
        ref(
          storageRef,
          filePath + randomUUID() + path.extname(file.originalname)
        ),
        file.buffer,
        metadata
      )
    )
  );
  const urls = await Promise.all(
    snapshots.map((snapshot) => getDownloadURL(snapshot!.ref))
  );
  const result = snapshots.map((snapshot, index) => {
    return {
      url: urls[index],
      refPath: snapshot?.metadata.fullPath!,
      name: files[index].originalname,
    };
  });
  return result;
};
export const fileService = { handleUpload, remove, uploadFirebase };
