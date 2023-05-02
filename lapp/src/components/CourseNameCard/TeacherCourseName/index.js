import React from "react";
const TeacherCourseName = ({ name, semester }) => {
  return (
    <div className="w-full h-40">
      <div
        className="grid h-40 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('../CourseName/teacher.png')`,
        }}
      >
        <div className="h-8 mt-4 text-5xl place-self-center">{name}</div>
        <div className="mb-4 text-3xl place-self-center">{semester}</div>
      </div>
    </div>
  );
};

export default TeacherCourseName;
