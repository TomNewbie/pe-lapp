// import for General tab
import { useParams } from "react-router-dom";
import {
  NavbarLecturer,
  TeacherNavCourse,
  CustomButton,
  ClassCode,
  TeacherCourseName,
  Announce,
  Notification,
  Footer,
} from "../../../components";
// import for Participants tab
import { Participants } from "../../../components";
// import for Exercise tab
import { Assignment } from "../../../components";
const CoursePage = () => {
  const { id } = useParams();
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
  return (
    // <body className="bg-[#FFFAF0]">
    <div className="flex flex-col">
      <NavbarLecturer></NavbarLecturer>
      <TeacherCourseName name={id} semester={"Winter 2023"}></TeacherCourseName>
      <TeacherNavCourse
        // General tab
        tab1={
          <div className="flex justify-around w-[1440px]">
            <div className="flex flex-col space-y-6 mt-8 mb-16 w-[900px]">
              <Announce></Announce>
              {notis.map((noti) => {
                <Notification
                  status={noti.status}
                  title={noti.title}
                  content={noti.content}
                  Files={noti.files}
                ></Notification>;
              })}
            </div>
            <div>
              <ClassCode code={"12345"}></ClassCode>
            </div>
          </div>
        }
        //Exercise tab
        tab2={
          <div className="mt-4 w-[1200px]">
            <CustomButton
              variant={"filled"}
              className={"px-5 py-0"}
              text={"+ Create"}
            ></CustomButton>
            <div className="flex flex-col mt-8 mb-16 divide-y">
              <Assignment></Assignment>
              <Assignment></Assignment>
              <Assignment></Assignment>
            </div>
          </div>
        }
        // Participants tab
        tab3={
          <div className="flex flex-col space-y-6 mt-8 mb-16 w-[1000px]">
            <Participants
              teacher={"Tran Tuan Anh"}
              students={students}
            ></Participants>
          </div>
        }
        // Grade tab
        tab4={"tab content 4"}
      ></TeacherNavCourse>
      <Footer></Footer>
    </div>
    // </body>
  );
};
export default CoursePage;
