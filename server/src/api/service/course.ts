import mongoose, { isValidObjectId } from "mongoose";
import { Course, CourseType } from "../model/course";
import { UserRole } from "./user";
import { Optional } from "../../utils/types";

type CoursesOfStudent = Array<{
  _id: string;
  name: string;
  semester: string;
  picture: string;
  lecturer_name: string;
}>;

type CoursesOfLecturer = Array<{
  _id: string;
  name: string;
  semester: string;
  picture: string;
  participant_count: number;
}>;

interface GetCoursesOptions {
  start?: number;
  num?: number;
  query?: string;
  sort?: string;
}

async function getCoursesOfUser(
  id: string,
  role: "student",
  options?: GetCoursesOptions
): Promise<CoursesOfStudent>;
async function getCoursesOfUser(
  id: string,
  role: "lecturer",
  options?: GetCoursesOptions
): Promise<CoursesOfLecturer>;
async function getCoursesOfUser(
  id: string,
  role: UserRole,
  options?: GetCoursesOptions
): Promise<CoursesOfStudent | CoursesOfLecturer>;
async function getCoursesOfUser(
  id: string,
  role: UserRole,
  { start: s = 0, num: n = 0, query, sort }: GetCoursesOptions = {}
): Promise<CoursesOfStudent | CoursesOfLecturer> {
  const start = Math.max(0, s); // in case is negative
  const num = Math.max(0, n); // in case is negative

  // aggregation pipeline
  const courses = Course.aggregate();
  const project = { _id: 1, name: 1, semester: 1, picture: 1 };

  // select courses of the user
  if (role === "student") {
    courses
      .match({ participants: id })
      .lookup({
        from: "lecturers",
        localField: "lecturer_id",
        foreignField: "_id",
        as: "lecturer",
      })
      .unwind("$lecturer")
      .project({ ...project, lecturer_name: "$lecturer.name" });
  } else {
    courses.match({ lecturer_id: id }).project({
      ...project,
      participant_count: { $size: "$participants" },
    });
  }

  // filter with query string
  if (query) {
    const regex = new RegExp(query, "i");

    if (role === "student") {
      courses.match({
        $or: [{ name: regex }, { lecturer_name: regex }, { semester: regex }],
      });
    } else {
      courses.match({
        $or: [{ name: regex }, { semester: regex }],
      });
    }
  }

  // filter a page
  if (sort) courses.sort(sort);
  if (start) courses.skip(start);
  if (num) courses.limit(num);

  return await courses;
}

export enum CourseError {
  ALREADY_JOINED,
  NOT_FOUND,
  INVALID_INPUT,
}

const joinCourse = async (
  studentId: string,
  courseId: string
): Promise<CourseError.ALREADY_JOINED | CourseError.NOT_FOUND | undefined> => {
  if (!isValidObjectId(courseId)) return CourseError.NOT_FOUND;

  const res = await Course.updateOne(
    { _id: courseId },
    { $addToSet: { participants: studentId } }
  );

  if (res.matchedCount === 0) return CourseError.NOT_FOUND;
  if (res.modifiedCount === 0) return CourseError.ALREADY_JOINED;
};

const create = async (
  course: Optional<CourseType, "picture" | "contents" | "participants">
): Promise<mongoose.Types.ObjectId | null> => {
  try {
    const result = await Course.create(course);
    return result._id;
  } catch (error) {
    throw error;
  }
};

const update = async (
  queryId: Pick<CourseType, "lecturer_id"> & { _id: string },
  course: Partial<CourseType>
): Promise<void | "not found" | "miss match"> => {
  if (!isValidObjectId(queryId._id)) return "not found";
  const result = await Course.updateOne(queryId, course, { new: true });
  if (result.matchedCount === 0) {
    return "miss match";
  }
};
export const courseService = { create, update, joinCourse, getCoursesOfUser };
