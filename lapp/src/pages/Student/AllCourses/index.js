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

const AllCoursesStudent = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    const body = document.body;
    if (modal) {
      body.classList.remove("modal-open");
      setModal(false);
    } else {
      body.classList.add("modal-open");
      setModal(true);
    }
  };

  const {
    data: courses,
    pending,
    error,
    refresh,
  } = useAPI({
    path: "/api/courses",
  });

  if (error) {
    return <Errorpage />;
  }

  if (pending) {
    return <LoadingPage />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {modal && (
        <JoinCourse
          handleClose={toggleModal}
          onJoinCourse={refresh}
        ></JoinCourse>
      )}
      <NavbarStudent></NavbarStudent>

      <div className="flex flex-row justify-between mt-8 ml-16 mr-16">
        <SearchBox></SearchBox>
        <button
          className="border-[#B02B3B] border-4 box-border px-2 h-9 pb-8 leading-9 rounded-xl hover:border-slate-500 text-dongle text-4xl ml-4 bg-[#ffffff] shadow-lg text-[#1B1C1E]"
          onClick={toggleModal}
        >
          Enter class code
        </button>
      </div>

      <div className="mt-8 ml-16 text-7xl">ALL COURSES</div>

      {courses.length !== 0 ? (
        <div className="flex-grow bg-[#F48F98]/30 grid grid-cols-4 grid-rows-2 mb-16 gap-x-2 gap-y-8 mx-16 rounded-2xl px-24 py-4">
          {courses.map((course) => {
            const link = "/course/" + course._id;
            return (
              <Link to={link}>
                <CoursecardStudent course={course}></CoursecardStudent>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-4xl text-center text-red-400">
          You did not join any courses
        </div>
      )}

      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AllCoursesStudent;
