import { apiRequest } from "..";

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
