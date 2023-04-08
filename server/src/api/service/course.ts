import { Course } from "../model/course";
import { UserRole } from "./user";

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

export function isGetCoursesOptions(val: unknown): val is GetCoursesOptions {
  if (typeof val !== "object" || val === null) return false;
  const { start: s, num: n, query: q, sort } = val as GetCoursesOptions;

  if (typeof s !== "undefined" && (typeof s !== "number" || s < 0))
    return false;
  if (typeof n !== "undefined" && (typeof n !== "number" || n < 0))
    return false;

  if (typeof q !== "undefined" && typeof q !== "string") return false;

  if (
    typeof sort !== "undefined" &&
    (typeof sort !== "object" ||
      sort === null ||
      Object.values(sort).some((v) => v !== 1 && v !== -1))
  )
    return false;

  return true;
}

export async function getCoursesOfUser(
  id: string,
  role: "student",
  options?: GetCoursesOptions
): Promise<CoursesOfStudent>;
export async function getCoursesOfUser(
  id: string,
  role: "lecturer",
  options?: GetCoursesOptions
): Promise<CoursesOfLecturer>;
export async function getCoursesOfUser(
  id: string,
  role: UserRole,
  options?: GetCoursesOptions
): Promise<CoursesOfStudent | CoursesOfLecturer>;
export async function getCoursesOfUser(
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
