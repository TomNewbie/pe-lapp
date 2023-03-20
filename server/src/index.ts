import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response, NextFunction } from "express";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import "express-async-errors";
import { errorHandler } from "./utils/middleware";

const app = express();
const port = process.env.PORT;
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const callback_url = "http://localhost:3000/auth/google/callback";
const jwt_secret = process.env.JWT_SECRET;
const client = new OAuth2Client(client_id, client_secret, callback_url);

// Middleware to check if the JWT token is valid
const authenticateJWT = (
  req: Request & { user?: string | jwt.JwtPayload },
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, jwt_secret as string, (err, user) => {
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

// Route for Google OAuth login
app.get("/auth/google", (req: Request, res: Response) => {
  const url = client.generateAuthUrl({
    access_type: "offline",
    scope: ["profile", "email"],
  });

  res.redirect(url);
});

// Route for Google OAuth callback
app.get("/auth/google/callback", async (req: Request, res: Response) => {
  const { tokens } = await client.getToken(req.query.code as string);
  client.setCredentials(tokens);

  const ticket = await client.verifyIdToken({
    idToken: tokens.id_token as string,
    audience: client_id,
  });

  const { name, email } = ticket.getPayload()!;
  const user = { name, email };

  const accessToken = jwt.sign(user, jwt_secret as string);

  res.json({ accessToken });
});

// Protected route that requires JWT token authentication
app.get("/protected", authenticateJWT, (req: Request, res: Response) => {
  res.send("You have access to the protected resource!");
});

app.use(errorHandler);
// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
