import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { errorHandler } from "./utils/middleware";

import { router } from "./api/route";
import cors from "cors";
import { clientController } from "./api/controller/client";

const app = express();
app.use(express.json());
app.use(cors());


app.use("/api", router);
app.get("*", clientController.get);

app.use(errorHandler);

export default app;