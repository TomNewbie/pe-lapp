import { File } from "buffer";
import { initializeApp } from "firebase/app";
import { deleteObject, getStorage, ref, uploadBytes } from "firebase/storage";
import { createReadStream } from "fs";
import multer from "multer";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const storageRef = ref(storage);
// export const spaceRef = ref(storage, "hehe");

// deleteObject(test).then(() => {
//   console.log("delete succeffully");
// });
// deleteObject(test).then(() => {
//   //   console.log("delete succeffully");
//   // });
