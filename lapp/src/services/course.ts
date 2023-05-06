import { apiRequest } from ".";

export const updateCourse = async (
  courseId: string,
  fields: {
    name?: string;
    picture?: string;
    semester?: string;
  }
) => {
  await apiRequest(`/api/course/${courseId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
};

export const joinCourse = async (courseId: string) => {
  await apiRequest(`/api/course/${courseId}`, { method: "POST" });
};

export const createCourse = async (fields: {
  name: string;
  picture?: string;
  semester?: string;
}) => {
  return await apiRequest<{ courseId: string }>("/api/course/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
};

export const addCourseParticipant = async (
  courseId: string,
  studentId: string
) => {
  await apiRequest(`/api/course/${courseId}/participant/${studentId}`, {
    method: "POST",
  });
};

export const removeCourseParticipant = async (
  courseId: string,
  studentId: string
) => {
  await apiRequest(`/api/course/${courseId}/participant/${studentId}`, {
    method: "DELETE",
  });
};
