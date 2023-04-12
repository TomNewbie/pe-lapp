import { Response } from "express";
import { userService } from "../service/user";
import { AuthRequest } from "./auth";
import { queryToNumber } from "../../utils";

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

const getLecturerList = async (req: AuthRequest, res: Response) => {
  const { s, n } = req.query;

  const lecturers = await userService.getLecturerList({
    start: queryToNumber(s),
    num: queryToNumber(n),
  });

  res.json(lecturers);
};

const getUserInfo = async (req: AuthRequest, res: Response) => {
  const { _id, role } = req.user!;

  const name = await userService.getUserName(_id, role);
  if (!name) {
    // cannot find the user in the db for some reason
    res.sendStatus(500);
    return;
  }

  res.json({ _id, role, name });
};

export const userController = {
  getStudent,
  getLecturer,
  getLecturerList,
  getUserInfo,
};
