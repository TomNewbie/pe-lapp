import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { errorHandler } from "./utils/middleware";
import { db } from "./config/database";
import { router } from "./api/route";
import cors from "cors";
import { Student } from "./api/model/user";
import { Course } from "./api/model/course";
import { createCourse } from "./api/service/course";
import { ObjectId } from "mongoose";
import { getUser } from "./api/service/user";

const app = express();
const port = process.env.PORT!;
const domain = process.env.SERVER_DOMAIN;
app.use(express.json());
app.use(cors());

db.then((kaka) => {
  // console.log(kaka);
  app.listen(port, () => {
    console.log(`Server running on ${domain}:${port}`);
  });
}).catch((err) => {
  console.log(err);
});

app.use("/api", router);

app.use(errorHandler);
// Student.collection
//   .getIndexes()
//   .then((indexes) => {
//     console.log("indexes:", indexes);
//     // ...
//   })
//   .catch(console.error);
// (async () => {
//   try {
//     createCourse({
//       content: "id123",
//       duration: "3 months",
//       lecturer: "Tho Phan",
//       name: "PE101",
//       picture:
//         "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f2b79293acd59ffcf0d_6002086f72b727fb4e01e3f5_web-design-courses.jpeg",
//       semester: "WS2022",
//     });
//     console.log("ahdsad");
//   } catch (error) {}
// })();
// getUser("17232@student.vgu.edu.vn").then((user) => console.log(user));
