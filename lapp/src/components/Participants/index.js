import React from "react";
import { Link } from "react-router-dom";
import { removeCourseParticipant } from "../../services/course/participant";
import { useAuth } from "../auth";
function copyToClipboard(email) {
  navigator.clipboard.writeText(email);
}
const Participants = ({
  lecturer,
  students,
  courseId,
  handleModal,
  participantsRefresh,
}) => {
  const auth = useAuth();
  const role = auth.user?.role;
  const studentSection = students.map((student) => {
    const link = "/profile/student/" + student._id;
    const removeUser = async () => {
      removeCourseParticipant(courseId, student._id)
        .then(() => {
          alert("Remove student " + student.name + " successfully!");
          participantsRefresh();
        })
        .catch((error) => {
          alert("Failed to remove student: " + error);
        });
    };
    return (
      <div>
        <div
          className="flex flex-row items-center h-16 text-3xl border-black"
          key={student.email}
        >
          <div className="flex flex-row justify-between">
            <img
              src={student.avatar}
              alt=""
              className="mr-4 rounded-full w-7 h-7"
            ></img>
            <Link to={link}>
              <div className="hover:underline">{student.name}</div>
            </Link>
          </div>

          <div className="flex flex-row ml-auto space-x-2">
            <button onClick={() => copyToClipboard(student.email)}>
              <img
                src="/participants-icon/mail.png"
                alt=""
                className="w-7 h-7"
              ></img>
            </button>
            {role === "lecturer" && (
              <button onClick={removeUser}>
                <img
                  src="/participants-icon/removeuser.svg"
                  alt=""
                  className="w-7 h-7"
                ></img>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  });
  const lecturerLink = "/profile/lecturer/" + lecturer._id;

  return (
    <div className="max-w-full">
      <div className="flex flex-col w-full">
        <div>
          <div className="text-[#E36255] text-5xl">Lecturer</div>
          <div className="flex flex-row items-center h-16 text-3xl border-t border-black">
            <div className="flex flex-row justify-between">
              <img
                src={lecturer.avatar}
                alt=""
                className="mr-4 rounded-full w-7 h-7"
              ></img>
              <Link to={lecturerLink}>
                <div className="hover:underline">{lecturer.name}</div>
              </Link>
            </div>

            <div className="ml-auto">
              <button
                onClick={() => {
                  copyToClipboard(lecturer.email);
                }}
              >
                <img
                  src="/participants-icon/mail.png"
                  alt=""
                  className="w-7 h-7"
                ></img>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 divide-y">
          <div className="text-[#E36255] text-5xl border-b border-black flex flex-row">
            <div>Students</div>
            {role === "lecturer" && (
              <img
                src="/participants-icon/adduser.svg"
                alt="add"
                className="w-8 h-8 ml-auto top-2"
                onClick={handleModal}
              ></img>
            )}
          </div>
          {studentSection}
        </div>
        {/* more */}
      </div>
    </div>
  );
};

export default Participants;
