import { Response, Request, NextFunction } from "express";

const login = async (req: Request, res: Response): Promise<string> => {
  return "jwtkakakakakakakka";
};
const checkNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  next();
};
export const authController = { login, checkNewUser };
