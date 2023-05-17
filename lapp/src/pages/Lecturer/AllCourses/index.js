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
import EditCourse from "../../../components/PopUp/EditCourse";
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
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editCourse, setEditCourse] = useState([]);
  const toggleCreateModal = () => {
    const body = document.body;
    if (createModal) {
      body.classList.remove("modal-open");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      body.classList.add("modal-open");
    }
    setCreateModal(!createModal);
  };
  const toggleEditModal = () => {
    const body = document.body;
    if (editModal) {
      body.classList.remove("modal-open");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      body.classList.add("modal-open");
    }
    setEditModal(!editModal);
  };

  const {
    data: courses,
    pending,
    error,
    refresh,
  } = useAPI({ path: "/api/courses" });

  if (error) {
    return <Errorpage />;
  }
  if (pending) {
    return <LoadingPage />;
  }

  return (
    <div className="relative">
      {createModal && (
        <CreateCourse
          handleClose={toggleCreateModal}
          onCreateCourse={refresh}
        ></CreateCourse>
      )}
      {editModal && (
        <EditCourse
          handleClose={toggleEditModal}
          onEditCourse={refresh}
          editCourse={editCourse}
        ></EditCourse>
      )}
      <NavbarLecturer></NavbarLecturer>
      <div className="flex flex-row justify-between mt-8 ml-16 mr-16">
        <SearchBox variant={"small"}></SearchBox>
        <button
          className="border-[#B02B3B] border-4 box-border px-2 h-9 pb-8 leading-9 rounded-xl hover:border-slate-500 text-dongle text-4xl ml-4 bg-[#ffffff] shadow-lg text-[#1B1C1E]"
          onClick={toggleCreateModal}
        >
          + Create class
        </button>
      </div>

      <div className="mt-8 ml-16 text-7xl">ALL COURSES</div>
      {courses && (
        <div className="bg-[#F48F98]/50 grid grid-cols-4 grid-rows-2 mb-16 gap-x-2 gap-y-8 mx-16 rounded-2xl px-24 py-4">
          {courses.map((course) => {
            return (
              <CoursecardTeacher
                course={course}
                handleEdit={() => {
                  setEditCourse(course);
                  toggleEditModal();
                }}
              ></CoursecardTeacher>
            );
          })}
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default AllCoursesLecturer;
