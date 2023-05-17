import { Request, Response } from "express";
import path from "path";
import {
  ACCESS_TOKEN_COOKIE_NAME,
  ACCESS_TOKEN_COOKIE_OPTIONS,
  getAccessToken,
} from "../../api/controller/auth";

export const fakeLogIn = async (req: Request, res: Response) => {
  const { email, name, avatar, expire } = req.query as any;
  if (!email) {
    // return the front end for fake log in
    return res.sendFile(path.join(__dirname, "index.html"));
  }

  // perform fake log in
  const { accessToken } = await getAccessToken(
    { email, name, avatar },
    expire || null
  );

  res
    .cookie(ACCESS_TOKEN_COOKIE_NAME, accessToken, ACCESS_TOKEN_COOKIE_OPTIONS)
    .redirect("/");
};
