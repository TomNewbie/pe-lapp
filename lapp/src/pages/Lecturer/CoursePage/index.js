// import for General tab
import { useParams } from "react-router-dom";
import {
  NavbarLecturer,
  TeacherNavCourse,
  CustomButton,
  TeacherCourseName,
  Announce,
  Notification,
  Footer,
  OverallGrade,
  AddStudent,
} from "../../../components";
import { Participants, Assignment, PostAnnEx } from "../../../components";
import { useState, useEffect } from "react";
import { useAPI } from "../../../hooks/useAPI";
import { Errorpage, LoadingPage } from "../../common";
import EditPost from "../../../components/PopUp/EditPost";

/** Need to fetch:
 - const course: { name: string; semester: string;}
 -  const notis: { status: string; title: string; content: string; files: {name: string;}[];}[]
 - const participants: {
    student: {
        url: string;
        name: string;
        mail: string;
    }[];
    lecturer: string;
}
- const exercises: {duedate: string;exName: string;}[]
- const studentGrade: {name: string;id: string;total: string;detailGrade: number[];}[]
- const classcode: string
 */

/**This component displays a course page for a lecturer, with four tabs: General, Exercise, Participants, and Grade. */
const CoursePage = () => {
  const { id } = useParams();
  const {
    data: course,
    pending: coursePending,
    error: courseError,
  } = useAPI({
    path: "/api/course/:id",
    params: { id },
  });
  const {
    data: participants,
    pending: participantsPending,
    error: participantsError,
    refresh: participantsRefresh,
  } = useAPI({
    path: "/api/course/:id/participants",
    params: { id },
  });
  const {
    data: contents,
    pending: contentsPending,
    error: contentsError,
    refresh: contentRefresh,
  } = useAPI({
    path: "/api/course/:id/contents",
    params: { id },
  });

  const {
    data: exercises,
    pending: exercisesPending,
    error: exercisesError,
    refresh: exercisesRefresh,
  } = useAPI({
    path: "/api/course/:id/exercises",
    params: { id },
  });
  const [postModal, setPostModal] = useState(false);
  const [exerciseModal, setExerciseModal] = useState(false);
  const [editPostModal, setEditPostModal] = useState(false);
  const [studentModal, setStudentModal] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [editContent, setEditContent] = useState([]);

  const handleClick = (index) => {
    setActiveTab(index);
    sessionStorage.setItem("activeTab", index.toString());
  };

  useEffect(() => {
    // Retrieve the active tab index from local storage
    const storedActiveTab = sessionStorage.getItem("activeTab");
    if (storedActiveTab) {
      setActiveTab(parseInt(storedActiveTab));
    }

    // Clear the stored active tab index when navigating away from the page
    return () => {
      sessionStorage.removeItem("activeTab");
    };
  }, []);

  if (participantsError) {
    console.log(participantsError);
    return <Errorpage />;
  }
  if (contentsError) {
    console.log(contentsError);
    return <Errorpage />;
  }
  if (exercisesError) {
    console.log(exercisesError);
    return <Errorpage />;
  }
  if (courseError) {
    console.log(courseError);
    return <Errorpage />;
  }
  if (
    participantsPending ||
    contentsPending ||
    exercisesPending ||
    coursePending
  ) {
    return <LoadingPage />;
  }

  // logic for modal
  const togglePostModal = () => {
    const body = document.body;
    if (postModal) {
      body.classList.remove("modal-open");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      body.classList.add("modal-open");
    }
    setPostModal(!postModal);
  };
  const toggleEditPost = () => {
    const body = document.body;
    if (editPostModal) {
      body.classList.remove("modal-open");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      body.classList.add("modal-open");
    }
    setEditPostModal(!editPostModal);
  };

  const toggleExerciseModal = () => {
    const body = document.body;
    if (exerciseModal) {
      body.classList.remove("modal-open");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      body.classList.add("modal-open");
    }
    setExerciseModal(!exerciseModal);
  };

  const toggleStudentModal = () => {
    const body = document.body;
    if (studentModal) {
      body.classList.remove("modal-open");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      body.classList.add("modal-open");
    }
    setStudentModal(!studentModal);
  };

  return (
    // <body className="bg-[#FFFAF0]">
    <div className="relative flex flex-col bg-[#FFFAF0] min-h-screen">
      {postModal && (
        <PostAnnEx
          handleClose={togglePostModal}
          onAddContent={contentRefresh}
          courseId={id}
        ></PostAnnEx>
      )}
      {editPostModal && (
        <EditPost
          handleClose={toggleEditPost}
          onUpdateContent={contentRefresh}
          courseId={id}
          editContent={editContent}
        ></EditPost>
      )}
      {exerciseModal && (
        <PostAnnEx
          courseId={id}
          type={"exercise"}
          handleClose={toggleExerciseModal}
          onAddExercise={exercisesRefresh}
        ></PostAnnEx>
      )}
      {studentModal && (
        <AddStudent
          handleClose={toggleStudentModal}
          courseId={id}
          onAddStudent={() => {
            participantsRefresh();
            handleClick(3);
          }}
        ></AddStudent>
      )}
      <NavbarLecturer></NavbarLecturer>
      <TeacherCourseName course={course}></TeacherCourseName>
      <div className="flex-grow w-full mt-8">
        <TeacherNavCourse
          activeTab={activeTab}
          handleClick={handleClick}
          // General tab
          tab1={
            <div className="flex flex-row justify-evenly space-x-24 w-[1000px] min-h-[370px]">
              <div className="flex flex-col  space-y-6 mt-8 mb-16 w-[900px]">
                <div onClick={togglePostModal}>
                  <Announce></Announce>
                </div>
                {contents ? (
                  <div>
                    {contents.map((content) => {
                      return (
                        <Notification
                          content={content}
                          courseId={id}
                          onChangeContents={contentRefresh}
                          handleEditContent={() => {
                            setEditContent(content);
                            toggleEditPost();
                          }}
                        ></Notification>
                      );
                    })}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          }
          //Exercise tab
          tab2={
            <div className="pt-8 w-[1000px] min-h-[370px]">
              <CustomButton
                variant={"filled"}
                className={"px-5 py-0"}
                text={"+ Create"}
                handleButton={toggleExerciseModal}
              ></CustomButton>
              {exercises ? (
                <div className="flex flex-col mt-8 mb-16 divide-y">
                  {exercises.map((exercise) => {
                    return (
                      <div>
                        <Assignment
                          courseId={id}
                          exercise={exercise}
                          exerciseId={exercise._id}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          }
          // Participants tab
          tab3={
            <div className="flex flex-col space-y-6 mt-8 mb-16 w-[1000px] min-h-[370px]">
              <Participants
                lecturer={participants.lecturer}
                students={participants.students}
                handleModal={toggleStudentModal}
                courseId={id}
                participantsRefresh={participantsRefresh}
              ></Participants>
            </div>
          }
          // Grade tab
          tab4={
            <div className="min-h-[370px] px-10 w-[1440px] mt-4">
              <OverallGrade courseId={id}></OverallGrade>
            </div>
          }
        ></TeacherNavCourse>
      </div>
      <Footer></Footer>
    </div>
    // </body>
  );
};
export default CoursePage;
