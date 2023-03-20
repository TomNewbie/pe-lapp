import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "express-async-errors";
import { errorHandler } from "./utils/middleware";
import { db } from "./config/database";
import { router } from "./api/route";
import cors from "cors";

const app = express();
const port = process.env.PORT!;

app.use(express.json());
app.use(cors());

db.then((kaka) => {
  // console.log(kaka);
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}).catch((err) => {
  console.log(err);
});

app.use("/api", router);

app.use(errorHandler);
