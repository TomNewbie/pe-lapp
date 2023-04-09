import { Types } from "mongoose";
import { Course } from "../model/course";
import { CourseType } from "../model/course";
// export const getAllCourseByEmail = async (
//   email: String
// ): Promise<CourseTye[] | null> => {
//   const courses = await Course.find({ participants: email });
//   return courses;
// };

// export const getCourseContentById = async (
//   id: Types.ObjectId
// ): Promise<string | null> => {
//   const course = await RichText.findById({ id });
//   if (!course) {
//     throw new Error("Course not found");
//   }
//   return course.content;
// };

export const createCourse = async (course: CourseType) => {
  await Course.create({ ...course });
  return;
};
