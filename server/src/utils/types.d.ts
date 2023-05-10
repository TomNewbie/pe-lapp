export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export interface NewFileType {
  refPath: string;
  name: string;
  url: string;
}
export interface FileType {
  name: string;
  url: string;
}
