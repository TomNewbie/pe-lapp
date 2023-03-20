import { db } from "./config/database";
import express from "express";
import cors from "cors";
import { router } from "./api/route";
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
//https://mongoosejs.com/docs/connections.html#error-handling
db.then((kaka) => {
  // console.log(kaka);
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}).catch((err) => {
  console.log(err);
});

app.use("/api", router);
