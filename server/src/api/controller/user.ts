import { Response } from "express";
import { getUser } from "../service/user";
import { AuthRequest } from "./auth";

const get = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const user = await getUser(id);
  res.json(user);
};

export const userController = { get };
