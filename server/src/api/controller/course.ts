import { Response } from "express";
import { AuthRequest } from "./auth";
import { CourseError, courseService } from "../service/course";
import { queryToNumber } from "../../utils";

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
    case CourseError.NOT_FOUND:
      res.status(404).send("Course not found");
      return;
    case CourseError.ALREADY_JOINED:
      res.status(400).send("Already joined");
      return;
  }

  res.sendStatus(201);
};

const createCourse = async (req: AuthRequest, res: Response) => {
  const { _id, role } = req.user!;

  if (role === "student") {
    res.sendStatus(401);
    return;
  }

  const result = await courseService.create({
    ...req.body,
    lecturer_id: _id,
  });

  if (result === CourseError.INVALID_INPUT) {
    res.status(400).send("Invalid input");
    return;
  }

  res.status(201).json({ courseId: result.toHexString() });
};

const updateCourse = async (req: AuthRequest, res: Response) => {
  const { _id: lecturer_id, role } = req.user!;
  const { id: _id } = req.params;
  const { name, description, semester, content } = req.body;
  if (role === "student") {
    res.status(400).send("Student can't create course");
    return;
  }
  if (!name && !description && !semester && !content) {
    res.status(400).send("Missing information to update");
    return;
  }
  const err = await courseService.update(
    { _id, lecturer_id },
    { name, semester }
  );
  switch (err) {
    case "not found":
      res.status(404).send("Course not found");
      return;
    case "miss match":
      res.status(400).send("You don't create that course");
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
