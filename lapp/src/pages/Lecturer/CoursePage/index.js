// import for General tab
import { Link, useParams } from "react-router-dom";
import {
  NavbarLecturer,
  TeacherNavCourse,
  CustomButton,
  ClassCode,
  TeacherCourseName,
  Announce,
  Notification,
  Footer,
  OverallGrade,
} from "../../../components";
import { Participants, Assignment, PostAnnEx } from "../../../components";
import { useState } from "react";
import { useAPI } from "../../../hooks/useAPI";
import { Errorpage } from "../../common";

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

//course heading
const course = { name: "Programming exercise", semester: "SS2023" };

const studentGrade = [
  {
    name: "A",
    id: "12345",
    total: "2",
    detailGrade: [10, 8],
  },
  {
    name: "B",
    id: "45678",
    total: "1",
    detailGrade: [7, 8],
  },
];

//class code
const classCode = "12345";

/**This component displays a course page for a lecturer, with four tabs: General, Exercise, Participants, and Grade. */
const CoursePage = () => {
  const { id } = useParams();
  const {
    data: participants,
    pending: participantsPending,
    error: participantsError,
  } = useAPI({
    path: "/api/course/:id/participants",
    params: { id },
  });
  const {
    data: contents,
    pending: contentsPending,
    error: contentsError,
  } = useAPI({
    path: "/api/course/:id/contents",
    params: { id },
  });
  const {
    data: exercises,
    pending: exercisesPending,
    error: exercisesError,
  } = useAPI({
    path: "/api/course/:id/exercises",
    params: { id },
  });
  const [postModal, setPostModal] = useState(false);
  const [exerciseModal, setExerciseModal] = useState(false);
  if (participantsError || contentsError || exercisesError) {
    return <Errorpage />;
  }
  if (participantsPending || contentsPending || exercisesPending) {
    return <div>Loading...</div>;
  }

  // logic for modal
  const togglePostModal = () => {
    const body = document.body;
    if (postModal) {
      body.classList.remove("modal-open");
    } else {
      body.classList.add("modal-open");
    }
    setPostModal(!postModal);
  };

  const toggleExerciseModal = () => {
    const body = document.body;
    if (exerciseModal) {
      body.classList.remove("modal-open");
    } else {
      body.classList.add("modal-open");
    }
    setExerciseModal(!exerciseModal);
  };

  return (
    // <body className="bg-[#FFFAF0]">
    <div className="relative flex flex-col bg-[#FFFAF0]">
      {postModal && <PostAnnEx handleClose={togglePostModal}></PostAnnEx>}
      {exerciseModal && (
        <PostAnnEx
          type={"exercise"}
          handleClose={toggleExerciseModal}
        ></PostAnnEx>
      )}
      <NavbarLecturer></NavbarLecturer>
      <TeacherCourseName
        name={id}
        semester={course.semester}
      ></TeacherCourseName>
      <div className="mt-8">
        <TeacherNavCourse
          // General tab
          tab1={
            <div className="flex justify-around w-[1440px] min-h-[370px]">
              <div className="flex flex-col space-y-6 mt-8 mb-16 w-[900px]">
                <div onClick={togglePostModal}>
                  <Announce></Announce>
                </div>

                {contents.map((content) => {
                  return <Notification content={content}></Notification>;
                })}
              </div>
              <div>
                <ClassCode code={classCode}></ClassCode>
              </div>
            </div>
          }
          //Exercise tab
          tab2={
            <div className="mt-4 w-[1200px] min-h-[370px]">
              <CustomButton
                variant={"filled"}
                className={"px-5 py-0"}
                text={"+ Create"}
                handleButton={toggleExerciseModal}
              ></CustomButton>
              <div className="flex flex-col mt-8 mb-16 divide-y">
                {exercises.map((exercise) => {
                  const link = "/exercise/" + exercise._id;
                  return (
                    <div>
                      <Link to={link}>
                        <Assignment exercise={exercise} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          }
          // Participants tab
          tab3={
            <div className="flex flex-col space-y-6 mt-8 mb-16 w-[1000px] min-h-[370px]">
              <Participants
                lecturer={participants.lecturer}
                students={participants.students}
              ></Participants>
            </div>
          }
          // Grade tab
          tab4={
            <div className="min-h-[370px] px-10 w-screen mt-4">
              <OverallGrade
                students={studentGrade}
                exercises={exercises}
              ></OverallGrade>
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
