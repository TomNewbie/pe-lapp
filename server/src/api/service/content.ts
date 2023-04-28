import { Types } from "mongoose";
import { CourseContent, CourseContentType } from "../model/course";

const create = async ({
  title,
  file,
  body,
}: Omit<
  CourseContentType,
  "createdAt" | "updatedAt"
>): Promise<Types.ObjectId> => {
  const { _id } = await CourseContent.create({ title, file, body });
  console.log(_id);
  return _id;
};
export const contentService = { create };
