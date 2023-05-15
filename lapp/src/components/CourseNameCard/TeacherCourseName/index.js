import React from "react";
const TeacherCourseName = ({ name, semester, classCode }) => {
  function copyToClipboard() {
    navigator.clipboard.writeText(classCode);
  }
  return (
    <div className="w-full h-40">
      <div
        className="grid h-40 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('../CourseName/teacher.png')`,
        }}
      >
        <div className="mt-4 text-5xl place-self-center">{name}</div>
        <div className="mb-4 text-3xl place-self-center">
          Semester: {semester}
        </div>
        <div
          className="mb-4 text-3xl truncate place-self-center"
          title={classCode}
          onClick={copyToClipboard}
        >
          Class code: {classCode}
        </div>
      </div>
    </div>
  );
};

export default TeacherCourseName;
