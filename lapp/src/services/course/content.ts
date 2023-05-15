import { apiRequest } from "..";
import { toFormData } from "../utils";

export const deleteCourseContent = async (
  courseId: string,
  contentId: string
) => {
  await apiRequest(`/api/course/${courseId}/content/${contentId}`, {
    method: "DELETE",
  });
};

export const updateCourseContent = async (
  courseId: string,
  contentId: string,
  fields: {
    title?: string;
    body?: string;
    /**
     * remove contain url string of the file that being store on cloud storage
     */
    remove?: string[];
    /**
     * the new File that upload from the user
     */
    files?: File[] | FileList;
  }
) => {
  await apiRequest(`/api/course/${courseId}/content/${contentId}`, {
    method: "PATCH",
    body: toFormData(fields),
  });
};

export const createCourseContent = async (
  courseId: string,
  fields: {
    /**
     * the new File that upload from the user
     */
    files: File[] | FileList;
    title: string;
    body: string;
  }
) => {
  await apiRequest(`/api/course/${courseId}/content`, {
    method: "POST",
    body: toFormData(fields),
  });
};
