import { Response, Request, NextFunction } from "express";
import { client } from "../../config/oauth";
import { addUser, getUser } from "../service/user";
import jwt from "jsonwebtoken";

const client_id = process.env.CLIENT_ID!;
const jwt_secret = process.env.JWT_SECRET!;

const login = (req: Request, res: Response) => {
  const url = client.generateAuthUrl({
    access_type: "offline",
    scope: ["profile", "email"],
  });

  res.redirect(url);
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

  if (!(await getUser(email!))) {
    await addUser({ email: email!, name: name!, avatar: avatar! });
  }

  const accessToken = jwt.sign({ email }, jwt_secret!);
  res.json({ accessToken });
};

// Middleware to check if the JWT token is valid
const authenticateJWT = (
  req: Request & { user?: string | jwt.JwtPayload },
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, jwt_secret, (err, user) => {
      console.log(user);
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export const authController = { login, loginCallback, authenticateJWT };
