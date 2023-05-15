// import for General tab
import { Link, useParams } from "react-router-dom";
import {
  NavbarStudent,
  StudentCourseName,
  Notification,
  Footer,
} from "../../../components";
import {
  StudentNavCourse,
  Participants,
  ExerciseSection,
} from "../../../components";
import { useAPI } from "../../../hooks/useAPI";
import { Errorpage, LoadingPage } from "../../common";

/** Need to fetch:
 * notis: { status: string; title: string; content: string; files: {name: string;}[];}[]
 * - const participants: {
    student: {
        url: string;
        name: string;
        mail: string;
    }[];
    lecturer: string;
}
 * exercises: { name: string; deadline: string; grade: string; status: string;}[]
 */

const course = { name: "Programming exercise", teacher: "Huynh Trung Hieu" };

// Ccomponent renders the main content of a course page for students, including notifications, participants, and exercises.
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
  if (participantsError || contentsError || exercisesError) {
    return <Errorpage />;
  }
  if (participantsPending || contentsPending || exercisesPending) {
    return <LoadingPage />;
  }
  return (
    <div className="relative flex flex-col bg-[#FFFAF0] ">
      <NavbarStudent></NavbarStudent>
      <StudentCourseName
        name={course.name}
        teacher={course.teacher}
      ></StudentCourseName>
      <div>
        <StudentNavCourse
          // General tab

          tab1={
            <div className="flex flex-col space-y-6 mt-8 mb-16  w-[1000px] min-h-[350px]">
              {contents.map((content) => {
                return <Notification content={content}></Notification>;
              })}
            </div>
          }
          // Participants tab
          tab2={
            <div className="flex flex-col space-y-6 mt-8 w-[1000px] min-h-[350px]">
              <Participants
                lecturer={participants.lecturer}
                students={participants.students}
              ></Participants>
            </div>
          }
          // Exercise tab
          tab3={
            <div className="flex flex-col space-y-6 mt-8 mb-16 w-[1000px] min-h-[350px]">
              {exercises.map((exercise) => {
                const link = "/exercise/" + exercise._id;
                return (
                  <div>
                    <Link to={link}>
                      <ExerciseSection exercise={exercise}></ExerciseSection>
                    </Link>
                  </div>
                );
              })}
            </div>
          }
        ></StudentNavCourse>
      </div>

      <Footer></Footer>
    </div>
    // </body>
  );
};
export default CoursePage;
