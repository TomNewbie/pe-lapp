import mongoose, { Types, isValidObjectId } from "mongoose";
import {
  Course,
  CourseContent,
  CourseContentType,
  CourseType,
} from "../model/course";
import { UserRole } from "./user";
import { Optional } from "../../utils/types";

type CoursesOfStudent = Array<{
  _id: string;
  name: string;
  semester?: string;
  picture: string;
  lecturer_name: string;
}>;

type CoursesOfLecturer = Array<{
  _id: string;
  name: string;
  semester?: string;
  picture: string;
  participant_count: number;
}>;

interface GetCoursesOptions {
  start?: number;
  num?: number;
  query?: string;
  sort?: string;
}
type teacherViewContent = Omit<
  CourseType,
  "contents" | "participants" | "lecturer_id"
> & {
  contents: CourseContentType;
  teacher_name: string;
};
let test: teacherViewContent = {
  contents: {
    body: "hahdsa",
    createdAt: new Date(),
    files: [{ name: "asdasdasd", url: "asdasdasdasd" }],
    title: "sadasdasdasd",
    updatedAt: new Date(),
  },
  teacher_name: "haha",
  name: "asdsadasdas",
  picture: "awsdasdasdad",
  semester: "asdasdasd",
};
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
  NOT_FOUND,
  INVALID_INPUT,
  ALREADY_JOINED,
  NOT_JOINED,
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

const create = async ({
  lecturer_id,
  name,
  picture,
  semester,
}: Optional<Omit<CourseType, "contents" | "participants">, "picture">): Promise<
  string | CourseError.INVALID_INPUT
> => {
  try {
    const { _id } = await Course.create({
      lecturer_id,
      name,
      picture,
      semester,
    });
    return _id.toHexString();
  } catch {
    return CourseError.INVALID_INPUT;
  }
};

type QueryCourseId = {
  lecturerId: string;
  courseId: string;
};

// type UpdateCourseFields = {
//   name?: string;
//   picture?: string;
//   semester?: string;
// };

const update = async (
  { lecturerId: lecturer_id, courseId: _id }: QueryCourseId,
  {
    name,
    picture,
    semester,
  }: Partial<Omit<CourseType, "participants" | "lecturer_id">>
): Promise<CourseError.NOT_FOUND | undefined> => {
  if (!isValidObjectId(_id)) return CourseError.NOT_FOUND;

  const result = await Course.updateOne(
    { _id, lecturer_id },
    { name, picture, semester }
  );

  if (result.matchedCount === 0) {
    return CourseError.NOT_FOUND;
  }
};
const addContent = async (
  courseId: string,
  contents: Types.ObjectId
): Promise<void> => {
  await Course.updateOne(
    { _id: courseId },
    { $addToSet: { contents: contents } }
  );
};

interface GetParticipantsResponse {
  lecturer: {
    _id: string;
    name: string;
    email: string;
    avatar: string;
  };
  students: Array<{
    _id: string;
    name: string;
    email: string;
    avatar: string;
  }>;
}

const getParticipants = async (
  courseId: string
): Promise<GetParticipantsResponse | CourseError.NOT_FOUND> => {
  if (!isValidObjectId(courseId)) return CourseError.NOT_FOUND;

  const [participants] = await Course.aggregate()
    .match({ _id: new Types.ObjectId(courseId) })
    .lookup({
      from: "lecturers",
      localField: "lecturer_id",
      foreignField: "_id",
      as: "lecturer",
    })
    .unwind("$lecturer")
    .lookup({
      from: "students",
      localField: "participants",
      foreignField: "_id",
      as: "students",
    })
    .project({
      _id: 0,
      lecturer: {
        _id: 1,
        name: 1,
        email: 1,
        avatar: 1,
      },
      students: {
        _id: 1,
        name: 1,
        email: 1,
        avatar: 1,
      },
    });

  return participants ?? CourseError.NOT_FOUND;
};

const addParticipant = async (
  { lecturerId, courseId }: QueryCourseId,
  studentId: string
): Promise<CourseError.ALREADY_JOINED | CourseError.NOT_FOUND | undefined> => {
  if (!isValidObjectId(courseId)) return CourseError.NOT_FOUND;

  const res = await Course.updateOne(
    { _id: courseId, lecturer_id: lecturerId },
    { $addToSet: { participants: studentId } }
  );

  if (res.matchedCount === 0) return CourseError.NOT_FOUND;
  if (res.modifiedCount === 0) return CourseError.ALREADY_JOINED;
};

const removeParticipant = async (
  { lecturerId, courseId }: QueryCourseId,
  studentId: string
): Promise<CourseError.NOT_JOINED | CourseError.NOT_FOUND | undefined> => {
  if (!isValidObjectId(courseId)) return CourseError.NOT_FOUND;

  const res = await Course.updateOne(
    { _id: courseId, lecturer_id: lecturerId },
    { $pull: { participants: studentId } }
  );

  if (res.matchedCount === 0) return CourseError.NOT_FOUND;
  if (res.modifiedCount === 0) return CourseError.NOT_JOINED;
};

const verifyAuthorize = async ({
  lecturerId,
  courseId,
}: QueryCourseId): Promise<CourseError.NOT_FOUND | void> => {
  if (!isValidObjectId(courseId)) return CourseError.NOT_FOUND;
  const res = await Course.findOne({ _id: courseId, lecturer_id: lecturerId });
  if (!res) return CourseError.NOT_FOUND;
};
const removeContent = async (courseId: string, contentId: string) => {
  await Course.updateOne({ _id: courseId }, { $pull: { contents: contentId } });
};

const getAllContent = async (
  courseId: string
): Promise<teacherViewContent[] | CourseError.NOT_FOUND> => {
  if (!isValidObjectId(courseId)) return CourseError.NOT_FOUND;
  const res = await Course.aggregate()
    .match({
      _id: new mongoose.Types.ObjectId(courseId),
    })
    .lookup({
      from: CourseContent.collection.name,
      localField: "contents",
      foreignField: "_id",
      as: "new",
    })
    .project({
      _id: 0,
      participants: 0,
      contents: 0,
      __v: 0,
    })
    .exec();
  if (res.length === 0) {
    return CourseError.NOT_FOUND;
  }
  console.log(res);
  return res;
};
export const courseService = {
  create,
  update,
  joinCourse,
  getCoursesOfUser,
  getParticipants,
  addParticipant,
  removeParticipant,
  verifyAuthorize,
  addContent,
  removeContent,
  getAllContent,
};
