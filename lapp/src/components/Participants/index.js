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
          className="relative flex flex-row items-center h-16 text-xl border-black"
          key={student.email}
        >
          <img
            src={student.avatar}
            alt=""
            className="w-8 h-8 mx-4 -my-5 rounded-full "
          ></img>
          <Link to={link}>
            <div className="mx-4 ml-2 -my-2 text-2xl hover:underline">
              {student.name}
            </div>
          </Link>

          <div>
            <button onClick={() => copyToClipboard(student.email)}>
              <img
                src="/participants-icon/mail.png"
                alt=""
                className="absolute w-5 h-5 mx-4 -my-5 right-4"
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
          <div className="text-[#E36255] text-4xl h-8">LECTURER</div>
          <div className="relative flex flex-row items-center h-16 border-t border-black">
            <img
              src={lecturer.avatar}
              alt=""
              className="w-8 h-8 mx-4 -my-5 rounded-full "
            ></img>
            <Link to={lecturerLink}>
              <div className="mx-4 ml-2 -my-2 text-2xl hover:underline">
                {lecturer.name}
              </div>
            </Link>

            <div>
              <button onClick={() => copyToClipboard(lecturer.email)}>
                <img
                  src="/participants-icon/mail.png"
                  alt=""
                  className="absolute w-5 h-5 mx-4 -my-5 right-4"
                ></img>
              </button>
            </div>
          </div>
        </div>
        <div className="divide-y">
          <div className="text-[#E36255] text-4xl h-8 border-b border-black">
            STUDENTS
          </div>
          {studentSection}
        </div>
        {/* more */}
      </div>
    </div>
  );
};

export default Participants;
