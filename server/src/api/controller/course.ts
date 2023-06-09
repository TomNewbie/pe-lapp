import { Response, NextFunction, Request } from "express";
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

const getCourse = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;

  const result = await courseService.getCourseById(id);

  if (result === CourseError.NOT_FOUND) {
    res.status(404).send("Course not found");
    return;
  }

  res.status(200).json(result);
};

const joinCourse = async (req: AuthRequest, res: Response) => {
  const { _id: studentId, role } = req.user!;
  const { id: courseId } = req.params;

  if (role === "lecturer") {
    res.sendStatus(401);
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

  res.status(201).json({ courseId: result });
};

const updateCourse = async (req: AuthRequest, res: Response) => {
  const { _id: lecturerId, role } = req.user!;
  const { id: courseId } = req.params;

  if (role === "student") {
    res.sendStatus(401);
    return;
  }

  const result = await courseService.update({ courseId, lecturerId }, req.body);

  if (result === CourseError.NOT_FOUND) {
    res.status(404).send(`Cannot find course "${courseId}" created by you`);
    return;
  }

  res.sendStatus(200);
};

const getParticipants = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;

  const result = await courseService.getParticipants(id);

  if (result === CourseError.NOT_FOUND) {
    res.status(404).send("Course not found");
    return;
  }

  res.status(200).json(result);
};

const addParticipant = async (req: AuthRequest, res: Response) => {
  const { _id: lecturerId, role } = req.user!;
  if (role === "student") {
    res.sendStatus(401);
    return;
  }

  const { id: courseId, studentId } = req.params;

  const err = await courseService.addParticipant(
    { courseId, lecturerId },
    studentId
  );

  switch (err) {
    case CourseError.ALREADY_JOINED:
      res.status(400).send("Already joined");
      return;
    case CourseError.NOT_FOUND:
      res.status(404).send(`Cannot find course "${courseId}" created by you`);
      return;
    case CourseError.STUDENT_NOT_FOUND:
      res.status(404).send("Student not found on our system");
      return;
  }

  res.sendStatus(204);
};

const removeParticipant = async (req: AuthRequest, res: Response) => {
  const { _id: lecturerId, role } = req.user!;
  if (role === "student") {
    res.sendStatus(401);
    return;
  }

  const { id: courseId, studentId } = req.params;

  const err = await courseService.removeParticipant(
    { courseId, lecturerId },
    studentId
  );

  switch (err) {
    case CourseError.STUDENT_NOT_FOUND:
      res.status(404).send("Student not found in course");
      return;
    case CourseError.NOT_FOUND:
      res.status(404).send(`Cannot find course "${courseId}" created by you`);
      return;
  }

  res.sendStatus(200);
};

const verifyAuthorize = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user!.role !== "lecturer") {
    res.status(404).send("Unauthorized");
  }
  const { id: courseId } = req.params;
  const { _id: lecturerId } = req.user!;
  const err = await courseService.verifyAuthorize({ lecturerId, courseId });
  if (err === CourseError.NOT_FOUND) {
    res
      .status(404)
      .send(`Cannot find course "${courseId}" created by you to upload`);
    return;
  }

  next();
};
const isInCourse = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { id: courseId } = req.params;
  const { _id: userId } = req.user!;
  const result = await courseService.isInCourse(
    req.user!.role,
    userId,
    courseId
  );
  if (result === CourseError.NOT_FOUND) {
    res.status(404).send("Course not found");
    return;
  }
  if (result === CourseError.STUDENT_NOT_FOUND) {
    res.status(404).send(`You are not join course ${courseId}`);
    return;
  }
  next();
};
const getAllContent = async (req: AuthRequest, res: Response) => {
  const { id: courseId } = req.params;
  const result = await courseService.getAllContent(courseId);
  // if (result === CourseError.NOT_FOUND) {
  //   res
  //     .status(404)
  //     .send(`Cannot find course "${courseId}"`);
  //   return;
  // }
  res.status(200).json(result);
};

export const courseController = {
  getAllCourses,
  getCourse,
  joinCourse,
  createCourse,
  updateCourse,
  getParticipants,
  addParticipant,
  removeParticipant,
  verifyAuthorize,
  getAllContent,
  isInCourse,
};
