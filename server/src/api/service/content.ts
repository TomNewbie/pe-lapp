import mongoose, { ObjectId, Types, isValidObjectId } from "mongoose";
import { CourseContent, CourseContentType } from "../model/course";
import { Course } from "../model/course";
import { FileType } from "../../utils/types";

const create = async ({
  title,
  files,
  body,
}: Omit<
  CourseContentType,
  "createdAt" | "updatedAt"
>): Promise<Types.ObjectId> => {
  const { _id } = await CourseContent.create({ title, files, body });
  console.log(_id);
  return _id;
};
type updateContentType = Omit<
  Partial<CourseContentType>,
  "updatedAt" | "createdAt"
> & {
  remove?: string[];
};
const update = async (contentId: string, updateContent: updateContentType) =>
  // : Omit<CourseContentType, "createdAt" | "updatedAt">
  {
    let update: {
      $set: {
        [key in keyof updateContentType]?: string;
      };
      $pull: {
        files?: {
          url: string[];
        };
      };
    } = {
      $set: {},
      $pull: { files: { url: [] } },
    };

    // Iterate over request body and add fields to update object
    for (const [key, value] of Object.entries(updateContent)) {
      if (value !== undefined) {
        if (key === "remove") {
          update.$pull.files!.url = value as string[];
          continue;
        }
        update.$set[key as keyof updateContentType] = value as string;
      }
    }
    const result = await CourseContent.findOneAndUpdate(
      { _id: contentId },
      update,
      { returnDocument: "before" }
    );

    console.log(result?.files);
  };
// update("645b565c14514ad6063542ab", {
//   body: "asdasdasd",
//   title: "test2",
//   remove: [
//     "https://firebasestorage.googleapis.com/v0/b/pe-lapp-384707.appspot.com/o/test%2F75d4f067-29ad-4ade-87d7-ba1b45ece121.pdf?alt=media&token=4eef136f-c1e9-43f2-b84e-f7e724d5a8b7",
//   ],
// });
export enum ContentError {
  NOT_FOUND,
  INVALID_INPUT,
}
const remove = async (contentId: string | Types.ObjectId) => {
  if (!isValidObjectId(contentId)) return ContentError.INVALID_INPUT;
  const result = await CourseContent.deleteOne({ _id: contentId });
  if (result.deletedCount === 0) return ContentError.NOT_FOUND;
};
const verifyAuthorize = async (
  contentId: string,
  courseId: string,
  lecturerId: string
) => {
  if (!isValidObjectId(contentId) && !isValidObjectId(courseId))
    return ContentError.NOT_FOUND;
  const res = await Course.findOne({
    _id: courseId,
    lecturer_id: lecturerId,
    contents: { $in: [contentId] },
  });
  if (!res) return ContentError.NOT_FOUND;
};
type contentPath = {
  file: {
    url: string;
  };
};
const getAllFilePath = async (contentId: string) => {
  const result = await CourseContent.aggregate()
    .match({ _id: new mongoose.Types.ObjectId(contentId) })
    .project({ "files.refPath": 1, _id: 0 })
    .unwind("files");
  console.log(result);
  // const result = await CourseContent.findOne({ _id: contentId });
  return result;
};
// getAllFilePath("645b57050eeae6de9c52cfac");
export const contentService = {
  create,
  remove,
  verifyAuthorize,
  update,
  getAllFilePath,
};
