import { Response, Request, NextFunction } from "express";
import { userService } from "../service/user";
import { Role } from "../types/user";

const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email = "god-kakaka@vgu.edu.vn";
  const name = "IamGod";

  const role: Role = email.split("@")[1].includes("student")
    ? "student"
    : "teacher";
  try {
    await userService.checkNewUser({ email, name, role });
  } catch (error) {
    next(error);
  }
  const jwt = "ahsdjuioadjkasdas";
  res.status(200).json({ jwt });
};

export const authController = { login };
