import React from "react";
const TeacherCourseName = ({ course }) => {
  function copyToClipboard() {
    navigator.clipboard.writeText(course._id);
  }
  return (
    <div className="w-full h-40">
      <div
        className="grid h-40 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('../CourseName/teacher.png')`,
        }}
      >
        <div className="mt-4 text-5xl place-self-center">{course.name}</div>
        <div className="mb-4 text-3xl place-self-center">
          Semester: {course.semester}
        </div>
        <div
          className="mb-4 text-3xl truncate place-self-center"
          title={course._id}
          onClick={copyToClipboard}
        >
          Class code: {course._id}
        </div>
      </div>
    </div>
  );
};

export default TeacherCourseName;
