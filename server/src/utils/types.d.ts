export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export interface FileType {
  name: string;
  url: string;
}
