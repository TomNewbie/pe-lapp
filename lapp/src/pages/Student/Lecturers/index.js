import { NavbarStudent, Footer } from "../../../components";
function copyToClipboard(email) {
  navigator.clipboard.writeText(email);
}
const lecturers = [
  {
    name: "a",
    faculty: "cse",
    mail: "sd@vgu.edu.vn",
    url: "/participants-icon/ava.png",
  },
  {
    name: "b",
    faculty: "ba",
    mail: "sd1@vgu.edu.vn",
    url: "/participants-icon/ava.png",
  },
  {
    name: "c",
    faculty: "cse",
    mail: "sd2@vgu.edu.vn",
    url: "/participants-icon/ava.png",
  },
  {
    name: "d",
    faculty: "ba",
    mail: "s@vgu.edu.vn",
    url: "/participants-icon/ava.png",
  },
  {
    name: "e",
    faculty: "ece",
    mail: "s3d@vgu.edu.vn",
    url: "/participants-icon/ava.png",
  },
];
const LecturerList = ({ lecturers }) => {
  const facultySection = lecturers.reduce((acc, lecturer) => {
    if (!acc[lecturer.faculty]) {
      acc[lecturer.faculty] = [lecturer];
    } else {
      acc[lecturer.faculty].push(lecturer);
    }
    return acc;
  }, {});
  const faculties = Object.keys(facultySection);
  console.log(facultySection);
  // Map over each faculty section and render the lecturers
  const LecturerSection = Object.entries(facultySection).map(
    ([key, val], index) => (
      <div key={index}>
        <div className="text-[#E36255] text-4xl h-8 border-b border-black">
          {faculties[index]}
        </div>
        <div className="divide-y">
          {val.map((lecturer) => (
            <div
              className="relative flex flex-row items-center h-16 text-xl"
              key={lecturer.mail}
            >
              <img
                src={lecturer.url}
                alt=""
                className="absolute mx-4 my-5"
              ></img>
              <div className="absolute ml-20 text-2xl">{lecturer.name}</div>
              <div>
                <button onClick={() => copyToClipboard(lecturer.mail)}>
                  <img
                    src="/participants-icon/mail.png"
                    alt=""
                    className="absolute w-5 h-5 right-4"
                  ></img>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );

  return (
    <div>
      <div>{LecturerSection}</div>
    </div>
  );
};

const Lecturers = () => {
  return (
    <div>
      <NavbarStudent></NavbarStudent>
      <LecturerList lecturers={lecturers} />
      <div className="absolute inset-x-0 bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Lecturers;
