import { Response } from "express";
import { AuthRequest } from "./auth";
import { getCoursesOfUser } from "../service/course";

const queryToNumber = (val: unknown): number | undefined => {
  if (typeof val === "string") val = val.trim();
  if (!val) return;
  const n = Number(val);
  return isNaN(n) ? undefined : n;
};

const getAllCourses = async (req: AuthRequest, res: Response) => {
  const { s, n, q, S } = req.query;
  const options = {
    start: queryToNumber(s),
    num: queryToNumber(n),
    query: typeof q === "string" ? q : undefined,
    sort:
      typeof S === "string" ? S : Array.isArray(S) ? S.join(" ") : undefined,
  };

  const { _id, role } = req.user!;
  const courses = await getCoursesOfUser(_id, role, options);
  res.json(courses);
};

const joinCourse = async (req: AuthRequest, res: Response) => {};

export const courseController = { getAllCourses, joinCourse };
