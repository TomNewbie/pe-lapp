import { Response } from "express";
import { AuthRequest } from "./auth";

const getAllCourses = async (req: AuthRequest, res: Response) => {
  console.log(req);
  res.sendStatus(200);
};

const joinCourse = async (req: AuthRequest, res: Response) => {};

const createCourse = async (req: AuthRequest, res: Response) => {
  const user = req.user;
  if (!user) {
    return res.sendStatus(500);
  }
  if (user.role === "student") {
    return res.status(400).json({ message: "Student can not create course" });
  }
};
export const courseController = { getAllCourses, joinCourse, createCourse };
