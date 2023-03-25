export interface IFile {
  name: string;
  description: string;
  creation_date: Date;
  file: string;
}

export interface IExercise extends IFile {
  status: "done" | "not done";
  deadline: Date;
}

export interface IMaterial extends IFile {}

export interface IRichText {
  content: string;
}
