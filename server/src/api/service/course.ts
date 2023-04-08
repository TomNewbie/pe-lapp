import { Course, course } from "../model/course";
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

type GetCoursesOptions = {
  /**
   * query a list starting at the `s + 1`-th course. (0-based index; defaults to 0)
   */
  s?: number;

  /**
   * number of courses to return in a list. (defaults to 1)
   */
  n?: number;

  /**
   * the string to search/filter the courses by. For a student, this will search
   * in the order of course name, lecturer name and semester. For a lecturer,
   * this will search only for the course name.
   */
  q?: string;

  /**
   * the sort object (key-value pairs) by which to sort the resulting query. The
   * keys are the names of the fields appearing in the Response body (see below)
   * by which to sort. The value of each key is either 1, for ascending, or -1,
   * for descending. Any field not provided in the sort object is not going to
   * be sorted.
   */
  sort?: {
    [field: string]: 1 | -1;
  };
};

export function isGetCoursesOptions(val: unknown): val is GetCoursesOptions {
  if (typeof val !== "object" || val === null) return false;
  const { s, n, q, sort } = val as GetCoursesOptions;

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
  { s = 0, n = 0, q, sort }: GetCoursesOptions = {}
): Promise<CoursesOfStudent | CoursesOfLecturer> {
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
  if (q) {
    const regex = new RegExp(q, "i");

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

  // sort
  if (sort && Object.keys(sort).length) {
    courses.sort(sort);
  }

  // take courses starting at s
  courses.skip(s);

  // take n courses
  if (n) {
    courses.limit(n);
  }

  return await courses;
}
