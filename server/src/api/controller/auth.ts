import { Response, Request, NextFunction } from "express";
import { client } from "../../config/oauth";
import { UserRole, userService } from "../service/user";
import jwt from "jsonwebtoken";

const client_id = process.env.CLIENT_ID!;
const jwt_secret = process.env.JWT_SECRET!;

const DEFAULT_LOGIN_REDIRECT_PATH = "/";

const login = (req: Request, res: Response) => {
  const { redirect: r } = req.query;
  const redirect_path = typeof r === "string" ? r : DEFAULT_LOGIN_REDIRECT_PATH;

  const url = client.generateAuthUrl({
    access_type: "offline",
    scope: ["profile", "email"],
    state: redirect_path,
  });

  res.redirect(url);
};

interface JwtUser {
  _id: string;
  role: UserRole;
}

function isJwtUser(obj: unknown): obj is JwtUser {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof (obj as JwtUser)._id === "string" &&
    ((obj as JwtUser).role === "student" ||
      (obj as JwtUser).role === "lecturer")
  );
}

export const getAccessToken = async (
  {
    email,
    name,
    avatar,
  }: {
    email: string;
    name: string;
    avatar: string;
  },
  expiresIn: string | number | null = "2h"
) => {
  const { _id, role } = userService.splitEmail(email);
  await userService.upsertUser(role, { _id, email, name, avatar });

  const jwtUser: JwtUser = { _id, role };
  const accessToken = jwt.sign(
    jwtUser,
    jwt_secret!,
    expiresIn !== null ? { expiresIn } : undefined
  );

  return { ...jwtUser, accessToken };
};

export const ACCESS_TOKEN_COOKIE_NAME = "access_token";
export const ACCESS_TOKEN_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  path: "/api",
};

const loginCallback = async (req: Request, res: Response): Promise<void> => {
  const { code, state: redirect_path } = req.query;
  const { tokens } = await client.getToken(code as string);
  client.setCredentials(tokens);

  const ticket = await client.verifyIdToken({
    idToken: tokens.id_token!,
    audience: client_id,
  });
  const { name, email, picture: avatar } = ticket.getPayload()!;

  const { accessToken } = await getAccessToken({
    email: email!,
    name: name!,
    avatar: avatar!,
  });

  res
    .cookie(ACCESS_TOKEN_COOKIE_NAME, accessToken, ACCESS_TOKEN_COOKIE_OPTIONS)
    .redirect(redirect_path as string);
};

const logout = (_: Request, res: Response) => {
  res
    .clearCookie(ACCESS_TOKEN_COOKIE_NAME, ACCESS_TOKEN_COOKIE_OPTIONS)
    .sendStatus(200);
};

export interface AuthRequest extends Request {
  user?: JwtUser;
}

// Middleware to check if the JWT token is valid
const authenticateJWT = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token: string | undefined = req.cookies.access_token;

  if (!token) {
    res.sendStatus(401);
    return;
  }

  jwt.verify(token, jwt_secret, (err, user) => {
    if (err || !isJwtUser(user)) {
      res.sendStatus(401);
      return;
    }

    req.user = user;
    next();
  });
};

export const authController = { login, loginCallback, authenticateJWT, logout };
