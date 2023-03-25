import { Types } from "mongoose";
import { Course } from "../model/course";
import { ICourse } from "../types/course";

export const getAllCourse = async (
  id: Types.ObjectId
): Promise<ICourse[] | null> => {
  const courses = await Course.find({ participants: id });
  return courses;
};

export const getCourseById = async (
  id: Types.ObjectId
): Promise<ICourse[] | null> => {
  const courses = await Course.find({ content: id });
  return courses;
};

export const createCourse = async (course: ICourse) => {
  await Course.create({ ...course });
  return;
};
