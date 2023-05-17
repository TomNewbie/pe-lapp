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

const course = { name: "Programming exercise", teacher: "Huynh Trung Hieu" };

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
    <div className="relative flex flex-col h-screeb">
      <NavbarStudent></NavbarStudent>
      <StudentCourseName
        name={course.name}
        teacher={course.teacher}
      ></StudentCourseName>
      <div className="flex-grow">
        <StudentNavCourse
          tab1={
            <div className="flex flex-col space-y-6 mt-8 mb-16 w-[1000px] min-h-[350px]">
              {contents ? (
                <div>
                  {contents.map((content) => {
                    return <Notification content={content}></Notification>;
                  })}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          }
          tab2={
            <div className="flex flex-col space-y-6 mt-8 w-[1000px] min-h-[350px]">
              <Participants
                lecturer={participants.lecturer}
                students={participants.students}
              ></Participants>
            </div>
          }
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
  );
};

export default CoursePage;
