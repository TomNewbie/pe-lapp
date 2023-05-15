import React from "react";
import { Link } from "react-router-dom";
function copyToClipboard(email) {
  navigator.clipboard.writeText(email);
}
const Participants = ({ lecturer, students }) => {
  const studentSection = students.map((student) => {
    const link = "/profile/student/" + student._id;

    return (
      <div>
        <div
          className="relative flex flex-row items-center h-16 text-3xl border-black"
          key={student.email}
        >
          <img
            src={student.avatar}
            alt=""
            className="mx-4 -my-5 rounded-full w-7 h-7 "
          ></img>
          <Link to={link}>
            <div className="mx-4 ml-2 -my-2 hover:underline">
              {student.name}
            </div>
          </Link>

          <div>
            <button onClick={() => copyToClipboard(student.email)}>
              <img
                src="/participants-icon/mail.png"
                alt=""
                className="absolute mx-4 -my-5 w-7 h-7 right-4"
              ></img>
            </button>
          </div>
        </div>
      </div>
    );
  });
  const lecturerLink = "/profile/lecturer/" + lecturer._id;

  return (
    <div className="max-w-full">
      <div className="flex flex-col w-full h-fit">
        <div>
          <div className="text-[#E36255] text-5xl">Lecturer</div>
          <div className="relative flex flex-row items-center h-16 border-t border-black">
            <img
              src={lecturer.avatar}
              alt=""
              className="mx-4 -my-5 rounded-full w-7 h-7 "
            ></img>
            <Link to={lecturerLink}>
              <div className="mx-4 ml-2 -my-2 text-3xl hover:underline">
                {lecturer.name}
              </div>
            </Link>

            <div>
              <button onClick={() => copyToClipboard(lecturer.email)}>
                <img
                  src="/participants-icon/mail.png"
                  alt=""
                  className="absolute mx-4 -my-5 w-7 h-7 right-4"
                ></img>
              </button>
            </div>
          </div>
        </div>
        <div className="divide-y">
          <div className="text-[#E36255] text-5xl border-b border-black">
            Students
          </div>
          {studentSection}
        </div>
        {/* more */}
      </div>
    </div>
  );
};

export default Participants;
