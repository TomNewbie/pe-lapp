import { Response } from "express";
import { AuthRequest } from "./auth";
import { getCoursesOfUser, joinCourse } from "../service/course";

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

const join = async (req: AuthRequest, res: Response) => {
  const { _id: studentId, role } = req.user!;
  const { id: courseId } = req.params;

  if (role === "lecturer") {
    res.status(400).send("Lecturers cannot join courses");
    return;
  }

  const err = await joinCourse(studentId, courseId);
  switch (err) {
    case "not found":
      res.status(404).send("Course not found");
      return;
    case "already joined":
      res.status(400).send("Already joined");
      return;
  }

  res.sendStatus(201);
};

export const courseController = { getAllCourses, joinCourse: join };
