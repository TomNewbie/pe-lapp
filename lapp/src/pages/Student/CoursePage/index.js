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
import { Errorpage } from "../../common";

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

//General tab: Notification
const notis = [
  {
    status: "no",
    title: "Announcement",
    content: "Today we learn Bayes Rules, hope you like the lecture.",
    files: [{ name: "Probability" }, { name: "Statistic" }],
  },
  {
    status: "true",
    title: "Announcement",
    content: "Tomorrow we will have an mini exam.",
    files: [],
  },
  {
    status: "true",
    title: "Practice test",
    content: "Hello",
    files: [{ name: "Math" }, { name: "Science" }],
  },
];

// Exercise tab
const exercises = [
  {
    name: "Exercise 1",
    deadline: "Monday, 15 February 2023, 12:00 AM",
    grade: "null",
    status: "undone",
  },
  {
    name: "Exercise 2",
    deadline: "Monday, 23 February 2023, 12:00 AM",
    grade: "null",
    status: "done",
  },
];

// Ccomponent renders the main content of a course page for students, including notifications, participants, and exercises.
const CoursePage = () => {
  const { id } = useParams();
  const { data, pending, error } = useAPI({
    path: "/api/course/:id/participants",
    params: { id },
  });
  if (error) {
    return <Errorpage />;
  }
  if (pending) {
    return <div>Loading...</div>;
  }
  return (
    <div className="relative flex flex-col bg-[#FFFAF0]">
      <NavbarStudent></NavbarStudent>
      <StudentCourseName
        name={course.name}
        teacher={course.teacher}
      ></StudentCourseName>
      <div>
        <StudentNavCourse
          // General tab

          tab1={
            <div className="flex flex-col space-y-6 mt-8 mb-16  w-[1000px]">
              {notis.map((noti) => {
                return (
                  <Notification
                    status={noti.status}
                    title={noti.title}
                    content={noti.content}
                    Files={noti.files}
                  ></Notification>
                );
              })}
            </div>
          }
          // Participants tab
          tab2={
            <div className="flex flex-col space-y-6 mt-8 mb-16 w-[800px]">
              <Participants
                lecturer={data.lecturer}
                students={data.students}
              ></Participants>
            </div>
          }
          // Exercise tab
          tab3={
            <div className="flex flex-col space-y-6 mt-8 mb-16 w-[1000px]">
              {exercises.map((exercise) => {
                return (
                  <Link to="/exercise">
                    <ExerciseSection
                      name={exercise.name}
                      deadline={exercise.deadline}
                      status={exercise.status}
                      grade={exercise.grade}
                    ></ExerciseSection>
                    ;
                  </Link>
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
