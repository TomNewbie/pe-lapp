import mongoose, { ObjectId, Types, isValidObjectId } from "mongoose";
import { CourseContent, CourseContentType } from "../model/course";
import { Course } from "../model/course";

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

const update = async (
  contentId: string,
  { title, files, body }: Omit<CourseContentType, "createdAt" | "updatedAt">
) => {
  const result = await CourseContent.updateOne(
    { _id: contentId },
    { title, files, body }
  );
  // return result;
};
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
    .project({ "files.url": 1, _id: 0 })
    .unwind("files");
  // const result = await CourseContent.findOne({ _id: contentId });
  return result;
};
export const contentService = {
  create,
  remove,
  verifyAuthorize,
  update,
  getAllFilePath,
};
