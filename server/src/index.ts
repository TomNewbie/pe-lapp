import { Course } from "./api/model/course";
import { Lecturer } from "./api/model/user";
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

// const newCourse = new Course({
//   lecturer_id: "master",
//   name: "Cooking master class",
//   quan: "ditmemayuyyyy",
// });

// newCourse
//   .save()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// Course.findOneAndUpdate(
//   { _id: "642fc61d756945b0c277b65d" },
//   { content: "jajaja" },
//   { new: true }
// )
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// Course.findById("642fc61d756945b0c277b65d");
// console.log(
//   Lecturer.findOneAndUpdate(
//     { _id: "thaythonewbie" },
//     {
//       name: "hehe",
//       kaka: "adsad",
//     },
//     { new: true, rawResult: true }
//   )
//     .exec()
//     .then((res) => console.log(res))
// );
// findOneAndUpdate dont change_id, must have atleast one attribute to change
