import { Request, Response } from "express";

const getUser = (req: Request, res: Response) => {
  res.send(req.params.id);
};

export const userController = { getUser };
