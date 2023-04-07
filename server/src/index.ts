import { Course } from "./api/model/course";
import app from "./app";
import { db } from "./config/database";
const port = process.env.PORT;
const domain = process.env.SERVER_DOMAIN;

db.then(() => {
  console.log(`Connected to database`);
  app.listen(port, () => {
    console.log(`Server running on ${domain}:${port}`);
  });
}).catch((err) => {
  console.log(err);
  process.exit(1);
});
