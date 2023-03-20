import { Response, Request, NextFunction } from "express";
import { addUser, getUser } from "../service/user";

const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email = "god-kakaka@vgu.edu.vn";
  const name = "IamGod";
  const avatar = "";

  if (!(await getUser(email))) {
    addUser({ email, name, avatar });
  }

  const jwt = "ahsdjuioadjkasdas";
  res.status(200).json({ jwt });
};

export const authController = { login };
