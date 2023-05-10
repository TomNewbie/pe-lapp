export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export interface FileType {
  refPath: string;
  name: string;
  url: string;
}
