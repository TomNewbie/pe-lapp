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

/** Need to fetch:
 * notis: { status: string; title: string; content: string; files: {name: string;}[];}[]
 * students: { url: string; name: string; mail: string; }[]
 * exercises: { name: string; deadline: string; grade: string; status: string;}[]
 */

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
//Participants tab: Participants section
const students = [
  { url: "/participants-icon/ava.png", name: "A", mail: "ava.gmail.com" },
  { url: "/participants-icon/ava.png", name: "B", mail: "ava1.gmail.com" },
  { url: "/participants-icon/ava.png", name: "C", mail: "ava2.gmail.com" },
];
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

  return (
    <div className="relative flex flex-col">
      <NavbarStudent></NavbarStudent>
      <StudentCourseName
        name={id}
        teacher={"Tran Tuan Anh"}
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
                teacher={"Tran Tuan Anh"}
                students={students}
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
