import { Link } from "react-router-dom";
import {
  NavbarStudent,
  Footer,
  SearchBox,
  CoursecardStudent,
  JoinCourse,
} from "../../../components";
import { useEffect, useState } from "react";
import { useAPI } from "../../../hooks/useAPI";
/** Need to fetch:
 *  courses: {
    name: string;
    lecturer: string;
    progress: string;
}[]
 */

const courses = [
  {
    name: "1",
    lecturer: "HHH",
    semester: "SS2023",
    picture: "/Coursecard_img/CourseStuPic.png",
  },
  {
    name: "2",
    lecturer: "HHH",
    semester: "SS2023",
    picture: "/Coursecard_img/CourseStuPic.png",
  },
  {
    name: "3",
    lecturer: "HHH",
    semester: "SS2023",
    picture: "/Coursecard_img/CourseStuPic.png",
  },
  {
    name: "4",
    lecturer: "HHH",
    semester: "SS2023",
    picture: "/Coursecard_img/CourseStuPic.png",
  },
  {
    name: "5",
    lecturer: "HHH",
    semester: "SS2023",
    picture: "/Coursecard_img/CourseStuPic.png",
  },
  {
    name: "6",
    lecturer: "HHH",
    semester: "SS2023",
    picture: "/Coursecard_img/CourseStuPic.png",
  },
  {
    name: "7",
    lecturer: "HHH",
    semester: "SS2023",
    picture: "/Coursecard_img/CourseStuPic.png",
  },
  {
    name: "8",
    lecturer: "HHH",
    semester: "SS2023",
    picture: "/Coursecard_img/CourseStuPic.png",
  },
];

// Component  which displays a list of courses that a student is enrolled in
const AllCoursesStudent = () => {
  const {
    data: test,
    pending,
    refresh,
  } = useAPI({ path: " /api/courses?s=0&n=8&q=&S=" });
  useEffect(() => {
    console.log(test);
  });
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    const body = document.body;
    if (modal) {
      body.classList.remove("modal-open");
    } else {
      body.classList.add("modal-open");
    }
    setModal(!modal);
  };
  return (
    <div className="relative">
      {modal && <JoinCourse handleClose={toggleModal}></JoinCourse>}
      <NavbarStudent></NavbarStudent>
      {/* Searchbox and join course button */}
      <div className="flex flex-row justify-between mt-8 ml-16 mr-16">
        <SearchBox variant={"small"}></SearchBox>
        <button
          className="border-[#B02B3B] border-4 box-border px-2 h-9 pb-8 leading-9 rounded-xl hover:border-slate-500 text-dongle text-3xl ml-4 bg-[#ffffff] shadow-lg text-[#1B1C1E]"
          onClick={toggleModal}
        >
          Enter class code
        </button>
      </div>

      {/* Display all courses */}
      <div className="mt-8 ml-16 text-7xl">ALL COURSES</div>
      <div className="bg-[#F48F98]/50 grid grid-cols-4 grid-rows-2 mb-16 gap-x-32 gap-y-8 mx-16 rounded-2xl px-24 py-4">
        {courses.map((course) => {
          const link = "/course/" + course.name;
          return (
            <Link to={link}>
              <CoursecardStudent course={course}></CoursecardStudent>
            </Link>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllCoursesStudent;
