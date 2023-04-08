import { Response } from "express";
import { AuthRequest } from "./auth";
import { getCoursesOfUser, isGetCoursesOptions } from "../service/course";

const getAllCourses = async (req: AuthRequest, res: Response) => {
  const options = req.body;
  if (typeof options !== "undefined" && !isGetCoursesOptions(options)) {
    res.status(400).send("Bad request body");
    return;
  }

  const { _id, role } = req.user!;
  const courses = await getCoursesOfUser(_id, role, options);
  res.json(courses);
};

const joinCourse = async (req: AuthRequest, res: Response) => {};

export const courseController = { getAllCourses, joinCourse };
