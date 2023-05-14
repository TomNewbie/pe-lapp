import { Link } from "react-router-dom";
import {
  NavbarLecturer,
  Footer,
  CoursecardTeacher,
  SearchBox,
  CreateCourse,
} from "../../../components";
import { useState } from "react";
import { useAPI } from "../../../hooks/useAPI";
import { Errorpage, LoadingPage } from "../../common";
/**Need to fetch courses:
 * const courses: {
    name: string;
    participants: number;
    semester: string;
}[]
*/

/**
 * Component that represents the page displaying all courses for a lecturer.
 * This component displays a search box, a button to create a new course, and a list of all courses.
 * Each course is represented by a course card.
 */
const AllCoursesLecturer = () => {
  /**
   * Toggles the state of the modal for creating a new course.
   */
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const { data: courses, pending, error } = useAPI({ path: " /api/courses" });

  if (error) {
    return <Errorpage />;
  }
  if (pending) {
    return <LoadingPage />;
  }

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
          const link = "/course/" + course._id;
          return (
            <Link to={link}>
              <CoursecardTeacher course={course}></CoursecardTeacher>
            </Link>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllCoursesLecturer;
