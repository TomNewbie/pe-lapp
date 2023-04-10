const Participants = ({ teacher, students }) => {
  //   const students = [
  //     { url: "/participants-icon/ava.png", name: "A" },
  //     { url: "/participants-icon/ava.png", name: "B" },
  //     { url: "/participants-icon/ava.png", name: "C" },
  //   ];
  const studentSection = students.map((student) => (
    <div>
      <div className="relative flex flex-row items-center h-16 border-black text-xl">
        <img src={student.url} alt="" className="absolute mx-4 my-5"></img>
        <div className="absolute ml-20 text-2xl">{student.name}</div>

        <a href={student.mail}>
          <img
            src="/participants-icon/mail.png"
            alt=""
            className="absolute right-4 h-5 w-5"></img>
        </a>
      </div>
    </div>
  ));
  console.log(students);
  return (
    <div className="ml-40 max-w-full">
      <div className="flex flex-col w-10/12 h-fit">
        <div>
          <div className="text-[#E36255] text-4xl h-8">TEACHERS</div>
          <div className="relative flex flex-row items-center h-16 border-t border-black">
            <img
              src="/participants-icon/ava.png"
              alt=""
              className="absolute mx-4 my-5"></img>
            <div className="absolute ml-20 text-2xl">{teacher}</div>
            <img
              src="/participants-icon/mail.png"
              alt=""
              className="absolute right-4 h-5 w-5"></img>
          </div>
        </div>
        <div className="divide-y">
          <div className="text-[#E36255] text-4xl h-8 border-b border-black">STUDENTS</div>
          {studentSection}
        </div>
        {/* more */}
      </div>
    </div>
  );
};

export default Participants;
