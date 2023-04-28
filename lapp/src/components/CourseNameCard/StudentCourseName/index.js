import React from "react";
const StudentCourseName = ({ name, teacher }) => {
  return (
    <div className="w-full h-40 mb-8">
      <div
        className="grid h-40 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('../CourseName/student.png')` }}
      >
        <div className="h-8 mt-4 text-5xl place-self-center">{name}</div>
        <div className="mb-4 text-3xl place-self-center">{teacher}</div>
      </div>
    </div>
  );
};

export default StudentCourseName;
