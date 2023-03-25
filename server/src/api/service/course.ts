import { Types } from "mongoose";
import { Course } from "../model/course";
import { RichText } from "../model/richtext";
import { ICourse } from "../types/course";

export const getAllCourse = async (
  id: Types.ObjectId
): Promise<ICourse[] | null> => {
  const courses = await Course.find({ participants: id });
  return courses;
};

export const getDetailCourse = async (
  id: Types.ObjectId
): Promise<string | null> => {
  const course = await RichText.findById({ id });
  if (!course) {
    throw new Error("Course not found");
  }
  return course.content;
};

export const createCourse = async (course: ICourse) => {
  await Course.create({ ...course });
  return;
};
