import { apiRequest } from "..";
import { toFormData } from "../utils";

export const createExercise = async (
  courseId: string,
  fields: {
    name: string;
    deadline: Date;
    files?: File[] | FileList;
    description: string;
  }
) => {
  await apiRequest(`/api/course/${courseId}/exercise`, {
    method: "POST",
    body: toFormData(fields),
  });
};

export const updateExercise = async (
  exerciseId: string,
  fields: {
    name?: string;
    deadline?: Date;
    description?: string;
    /**
     * remove contain url string of the file that being store on cloud storage
     */
    remove?: string[];
    /**
     * the new File that upload from the user
     */
    files?: File[];
  }
) => {
  await apiRequest(`/api/exercises/${exerciseId}`, {
    method: "PATCH",
    body: toFormData(fields),
  });
};

/** Add grade for student solution */
export const gradeStudentSolution = async (
  exerciseId: string,
  studentId: string,
  fields: {
    /** grade from [0, 100] */
    grade: number;
  }
) => {
  await apiRequest(`/api/exercises/${exerciseId}/students/${studentId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
};

/**
 * Delete exercise by id. All student solution related to that exercise will be
 * deleted 😿
 */
export const deleteExercise = async (exerciseId: string) => {
  await apiRequest(`/api/exercises/${exerciseId}`, { method: "DELETE" });
};

export const createSolution = async (
  exerciseId: string,
  fields: {
    files: File[] | FileList;
  }
) => {
  await apiRequest(`/api/exercises/${exerciseId}`, {
    method: "POST",
    body: toFormData(fields),
  });
};
