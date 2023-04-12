import React from "react";

function copyToClipboard(email) {
  navigator.clipboard.writeText(email);
}

const Participants = ({ teacher, students }) => {
  const studentSection = students.map((student) => (
    <div>
      <div
        className="relative flex flex-row items-center h-16 text-xl border-black"
        key={student.mail}
      >
        <img src={student.url} alt="" className="absolute mx-4 my-5"></img>
        <div className="absolute ml-20 text-2xl">{student.name}</div>

        <div>
          <button onClick={() => copyToClipboard(student.mail)}>
            <img
              src="/participants-icon/mail.png"
              alt=""
              className="absolute w-5 h-5 right-4"
            ></img>
          </button>
        </div>
      </div>
    </div>
  ));

  console.log(students);
  return (
    <div className="max-w-full">
      <div className="flex flex-col w-full h-fit">
        <div>
          <div className="text-[#E36255] text-4xl h-8">TEACHERS</div>
          <div className="relative flex flex-row items-center h-16 border-t border-black">
            <img
              src="/participants-icon/ava.png"
              alt=""
              className="absolute mx-4 my-5"
            ></img>
            <div className="absolute ml-20 text-2xl">{teacher}</div>
            <button>
              <img
                src="/participants-icon/mail.png"
                alt=""
                className="absolute w-5 h-5 right-4"
              ></img>
            </button>
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
