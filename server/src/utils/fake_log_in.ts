import dotenv from "dotenv";
dotenv.config();

import { db } from "../config/database";
import { createInterface } from "readline/promises";
import { getAccessToken } from "../api/controller/auth";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async () => {
  const email = await rl.question("Enter email: ");
  const name = await rl.question("Enter name (empty for default): ");
  const avatar = await rl.question("Enter avatar URL (empty for default): ");
  const expiresIn = await rl.question(
    "When will the access token expire? (empty for never): "
  );
  rl.close();

  const { connection } = await db;
  const res = await getAccessToken({ email, name, avatar }, expiresIn || null);
  console.log(res);

  connection.close();
})();
