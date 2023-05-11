import path from "path";
import dotenv from "dotenv";
const envPath = path.resolve(__dirname, "../.env");
dotenv.config({ path: envPath });
import express from "express";
import "express-async-errors";
import { errorHandler } from "./utils/middleware";
import { apiRouter } from "./api/route";
import cors from "cors";
import cookieParser from "cookie-parser";
import { clientRouter } from "./client/route";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

// Serve the API routes
app.use("/api", apiRouter);
// Serve the React app
app.use(clientRouter);

app.use(errorHandler);

export default app;
