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
  "updatedAt" | "createdAt" | "files"
>;
const updateOldContent = async (
  contentId: string,
  updateContent: updateContentType,
  removeFiles: string[]
) =>
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
      $pull: { files: { url: removeFiles } },
    };

    // Iterate over request body and add fields to update object
    for (const [key, value] of Object.entries(updateContent)) {
      if (value !== undefined) {
        update.$set[key as keyof updateContentType] = value as string;
      }
    }
    console.log(update);
    const result = await CourseContent.findOneAndUpdate(
      { _id: contentId },
      update,
      { returnDocument: "before", projection: "files" }
    );

    return result!.files;
  };
// updateOldContent(
//   "64630764abc58a09845d9c53",
//   {
//     body: "asdasdasd",
//     title: "test2",
//   },
//   [
//     "https://firebasestorage.googleapis.com/v0/b/pe-lapp-384707.appspot.com/o/test%2Fb3b8192e-7b84-4ae1-9170-655c66b4a335.png?alt=media&token=39c4e9b9-effc-42b1-84f5-8561b02fee2a",
//   ]
// );
const addNewFiles = async (contentId: string, files: FileType[]) => {
  await CourseContent.updateOne(
    { _id: contentId },
    { $addToSet: { files: files } }
  );
};
// addNewFiles("645b57050eeae6de9c52cfac", [
//   {
//     name: "01_Ch1 Introduction.pdf",
//     url: "https://firebasestorage.googleapis.com/v0/b/pe-lapp-384707.appspot.com/o/production%2Fdefault%2F01_Ch1%20Introduction.pdf?alt=media&token=25998c44-7c45-4e36-8ce7-3afd63816768",
//     refPath: "production/default/01_Ch1 Introduction.pdf",
//   },
//   {
//     name: "02_Ch2 Software Processes.pdf",
//     url: "https://firebasestorage.googleapis.com/v0/b/pe-lapp-384707.appspot.com/o/production%2Fdefault%2F02_Ch2%20Software%20Processes.pdf?alt=media&token=ec6d6ddb-52d0-493f-8d22-90445c3a1b15",
//     refPath: "production/default/02_Ch2 Software Processes.pdf",
//   },
// ]);
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
  updateOldContent,
  getAllFilePath,
  addNewFiles,
};
