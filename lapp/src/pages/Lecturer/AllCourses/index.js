import { Link } from "react-router-dom";
import {
  NavbarLecturer,
  Footer,
  CoursecardTeacher,
  SearchBox,
  CreateCourse,
} from "../../../components";
import { useState } from "react";
const courses = [
  { name: "1", participants: 12, semester: "SS2023" },
  { name: "2", participants: 12, semester: "SS2023" },
  { name: "3", participants: 12, semester: "SS2023" },
  { name: "4", participants: 12, semester: "SS2023" },
  { name: "5", participants: 12, semester: "SS2023" },
  { name: "6", participants: 12, semester: "SS2023" },
  { name: "7", participants: 12, semester: "SS2023" },
  { name: "8", participants: 12, semester: "SS2023" },
];

const AllCoursesLecturer = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="relative">
      {modal && <CreateCourse handleClose={toggleModal}></CreateCourse>}
      <NavbarLecturer></NavbarLecturer>
      <div className="flex flex-row justify-between mt-8 ml-16 mr-16">
        <SearchBox variant={"small"}></SearchBox>
        <button
          className="border-[#B02B3B] border-4 box-border px-2 h-9 pb-8 leading-9 rounded-xl hover:border-slate-500 text-dongle text-3xl ml-4 bg-[#ffffff] shadow-xl text-[#1B1C1E]"
          onClick={() => {
            toggleModal();
          }}
        >
          + Create class
        </button>
      </div>

      <div className="mt-8 ml-16 text-7xl">ALL COURSES</div>
      <div className="bg-[#F48F98]/50 grid grid-cols-4 grid-rows-2 mb-16 gap-x-32 gap-y-8 mx-16 rounded-2xl px-24 py-4">
        {courses.map((course) => {
          const link = "/course/" + course.name;
          return (
            <Link to={link}>
              <CoursecardTeacher
                courseName={course.name}
                numberOfParticipants={course.participants}
                semester={course.semester}
              ></CoursecardTeacher>
            </Link>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllCoursesLecturer;
