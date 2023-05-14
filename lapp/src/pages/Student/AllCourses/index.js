import { Link } from "react-router-dom";
import {
  NavbarStudent,
  Footer,
  SearchBox,
  CoursecardStudent,
  JoinCourse,
} from "../../../components";
import { useState } from "react";
import { useAPI } from "../../../hooks/useAPI";
import { Errorpage, LoadingPage } from "../../common";
/** Need to fetch:
 *  courses: {
    name: string;
    lecturer: string;
    semester: string;
}[]
 */

// Component  which displays a list of courses that a student is enrolled in
const AllCoursesStudent = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    const body = document.body;
    if (modal) {
      body.classList.remove("modal-open");
    } else {
      body.classList.add("modal-open");
    }
  };
  const { data: test, pending, error } = useAPI({ path: " /api/courses" });
  console.log(test);
  if (error) {
    return <Errorpage />;
  }
  if (pending) {
    return <LoadingPage />;
  }

  return (
    <div className="relative">
      {modal && <JoinCourse handleClose={toggleModal}></JoinCourse>}
      <NavbarStudent></NavbarStudent>
      {/* Searchbox and join course button */}
      <div className="flex flex-row justify-between mt-8 ml-16 mr-16">
        <SearchBox></SearchBox>
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
        {test.map((course) => {
          const link = "/course/" + course._id;
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
