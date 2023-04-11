import { Response } from "express";
import { AuthRequest } from "./auth";
import { courseService } from "../service/course";

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
  const courses = await courseService.getCoursesOfUser(_id, role, options);
  res.json(courses);
};

const joinCourse = async (req: AuthRequest, res: Response) => {
  const { _id: studentId, role } = req.user!;
  const { id: courseId } = req.params;

  if (role === "lecturer") {
    res.status(400).send("Lecturers cannot join courses");
    return;
  }

  const err = await courseService.joinCourse(studentId, courseId);
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

const createCourse = async (req: AuthRequest, res: Response) => {
  const { _id, role } = req.user!;
  const { name, description, semester } = req.body;
  if (role === "student") {
    res.status(400).json({ message: "student can't create course" });
    return;
  }
  if (!name) {
    res.status(400).json({ message: "misisng course name" });
    return;
  }
  if (!description) {
    res.status(400).json({ message: "missing description name" });
    return;
  }
  if (!semester) {
    res.status(400).json({ message: "misisng semester name" });
    return;
  }
  try {
    const id = await courseService.create({
      name,
      description,
      semester,
      lecturer_id: _id,
    });
    res.status(201).json({ courseId: id });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const updateCourse = async (req: AuthRequest, res: Response) => {
  const { _id: lecturer_id, role } = req.user!;
  const { id: _id } = req.params;
  const { name, description, semester, content } = req.body;
  if (role === "student") {
    res.status(400).json({ message: "student can't create course" });
    return;
  }
  if (!name && !description && !semester && !content) {
    res.status(400).json({ message: "Missing information to update" });
    return;
  }
  const err = await courseService.update(
    { _id, lecturer_id },
    { name, description, semester, content }
  );
  switch (err) {
    case "not found":
      res.status(404).json({ message: "Course not found" });
      return;
    case "miss match":
      res.status(400).json({ message: "You don't create that course" });
      return;
  }
  res.sendStatus(200);
};

export const courseController = {
  getAllCourses,
  joinCourse,
  createCourse,
  updateCourse,
};
