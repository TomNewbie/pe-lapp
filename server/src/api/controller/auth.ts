import { Response, Request, NextFunction } from "express";
import { client } from "../../config/oauth";
import { UserRole, splitEmail, upsertUser } from "../service/user";
import jwt, { JwtPayload } from "jsonwebtoken";

const client_id = process.env.CLIENT_ID!;
const jwt_secret = process.env.JWT_SECRET!;

const login = (req: Request, res: Response) => {
  const url = client.generateAuthUrl({
    access_type: "offline",
    scope: ["profile", "email"],
  });

  res.redirect(url);
};

interface JwtUser {
  _id: string;
  role: UserRole;
}

function isJwtUser(obj: unknown): obj is JwtUser {
  return (
    typeof (obj as JwtUser)._id === "string" &&
    ((obj as JwtUser).role === "student" ||
      (obj as JwtUser).role === "lecturer")
  );
}

export const getAccessToken = async ({
  email,
  name,
  avatar,
}: {
  email: string;
  name: string;
  avatar: string;
}) => {
  const [_id, role] = splitEmail(email);
  await upsertUser(role, { _id, email, name, avatar });

  const jwtUser: JwtUser = { _id, role };
  const accessToken = jwt.sign(jwtUser, jwt_secret!, { expiresIn: "2h" });

  return { ...jwtUser, accessToken };
};

const loginCallback = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { tokens } = await client.getToken(req.query.code as string);
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

  res.json({ accessToken });
};

type ExtendedJwtPayload = JwtPayload & JwtUser;

function isExtendedJwtPayload(
  payload: JwtPayload
): payload is ExtendedJwtPayload {
  return isJwtUser(payload);
}

export interface AuthRequest extends Request {
  user?: ExtendedJwtPayload;
}

// Middleware to check if the JWT token is valid
const authenticateJWT = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, jwt_secret, (err, user) => {
      if (err || typeof user !== "object") {
        return res.sendStatus(403);
      }

      if (isExtendedJwtPayload(user)) {
        req.user = user;
      }

      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export const authController = { login, loginCallback, authenticateJWT };
