import app from "./app";
// import { env } from "./config/environment"
// import { Course } from "./api/model/course";
const port = process.env.PORT;
const domain = process.env.SERVER_DOMAIN;

app.listen(port, () => {
  console.log(`Server running on ${domain}:${port}`);
});

// Course.collection
//   .getIndexes()
//   .then((indexes) => {
//     console.log("indexes:", indexes);
//     // ...
//   })
//   .catch(console.error);
