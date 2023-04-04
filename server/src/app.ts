import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { errorHandler } from "./utils/middleware";
import { db } from "./config/database";
import { router } from "./api/route";
import cors from "cors";
import { clientController } from "./api/controller/client";

const app = express();
app.use(express.json());
app.use(cors());

db.then(() => {
  console.log(`Connected to database`)
}).catch((err) => {
  console.log(err);
  process.exit(1);
});

app.use("/api", router);
app.get("*", clientController.get);

app.use(errorHandler);

export default app;