import { Types } from "mongoose";
import { Course } from "../model/course";
import { RichText } from "../model/richtext";
import { ICourse } from "../types/course";

export const getAllCourseByEmail = async (
  email: String
): Promise<ICourse[] | null> => {
  const courses = await Course.find({ participants: email });
  return courses;
};

export const getDetailCourseByEmail = async (
  email: String
): Promise<string | null> => {
  const course = await RichText.findById({ email });
  if (!course) {
    throw new Error("Course not found");
  }
  return course.content;
};

export const createCourse = async (course: ICourse) => {
  await Course.create({ ...course });
  return;
};
