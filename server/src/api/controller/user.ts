import { Response } from "express";
import { userService } from "../service/user";
import { AuthRequest } from "./auth";

const getStudent = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const user = await userService.getStudentById(id);

  if (!user) {
    res.sendStatus(404);
    return;
  }

  res.json(user);
};

const getLecturer = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const user = await userService.getLecturerById(id);

  if (!user) {
    res.sendStatus(404);
    return;
  }

  res.json(user);
};

export const userController = { getStudent, getLecturer };
