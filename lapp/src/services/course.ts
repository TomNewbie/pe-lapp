import { apiRequest } from ".";

export const updateCourse = async (
  accessToken: string,
  courseId: string,
  fields: {
    name?: string;
    picture?: string;
    semester?: string;
  }
) => {
  await apiRequest(`/api/course/${courseId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields),
  });
};

export const joinCourse = async (accessToken: string, courseId: string) => {
  await apiRequest(`/api/course/${courseId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const createCourse = async (
  accessToken: string,
  fields: {
    name: string;
    picture?: string;
    semester?: string;
  }
) => {
  return await apiRequest<{ courseId: string }>("/api/course/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields),
  });
};

export const addCourseParticipant = async (
  accessToken: string,
  courseId: string,
  studentId: string
) => {
  await apiRequest(`/api/course/${courseId}/participant/${studentId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const removeCourseParticipant = async (
  accessToken: string,
  courseId: string,
  studentId: string
) => {
  await apiRequest(`/api/course/${courseId}/participant/${studentId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
