import { Response } from "express";
import { AuthRequest } from "./auth";

const getAllCourses = async (req: AuthRequest, res: Response) => {};

const joinCourse = async (req: AuthRequest, res: Response) => {};

export const courseController = { getAllCourses, joinCourse };
