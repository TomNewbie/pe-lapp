import path from "path";

export const allowed: Array<string> = [
  ".pdf",
  ".png",
  ".doc",
  ".docx",
  ".jpg",
  ",jpeg",
  ".svg",
  ".gif",
];

export const uploadLimit = {
  fileSize: 5 * 1024 * 1024, // file size
  fieldNameSize: 10, // field name for text
  fields: 5, // number of text field
  files: 5, // number of file
  fieldSize: 256, // text limit
};

export const filePath = path.join(__dirname, "..", "..", "upload");
// console.log(filePath);
export const fileFields = "files"; // field name that contain file
