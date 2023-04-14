import { NavbarStudent, Footer } from "../../../components";
function copyToClipboard(email) {
  navigator.clipboard.writeText(email);
}

const Lecturers = ({ lecturers }) => {
  const facultySection = lecturers.group(({ faculty }) => faculty);
  console.log(facultySection);
  const LecturerSection = lecturers.map((lecturer) => (
    <div>
      <div
        className="relative flex flex-row items-center h-16 text-xl border-black"
        key={lecturer.mail}
      >
        <img src={lecturer.url} alt="" className="absolute mx-4 my-5"></img>
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
    </div>
  ));
  return (
    <div>
      <NavbarStudent></NavbarStudent>
      <div className="divide-y">
        <div className="text-[#E36255] text-4xl h-8 border-b border-black">
          Faculty
        </div>
        {LecturerSection}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Lecturers;
