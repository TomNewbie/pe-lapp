import React from "react";
import {
  Notification,
  NavbarLecturer,
  TeacherCourseName,
  RecordTable,
  CustomButton,
  Footer,
} from "../../../components";
const course = { name: "Programming exercise", semester: "SS2023" };
const notification = {
  name: "Mock test 1",
  maxpoints: 100,
  duedate: "00:00 30/4/2023",
  content:
    "This is the exercise for this week. You have to submit it on time. If you have any question, please feel free to contact me.",
  Files: [{ name: "Probability" }, { name: "Statistic" }],
};
const students = [
  {
    name: "Le Hoang Kim Thanh",
    id: 18047,
    submittime: "12:00 28/4/2023",
    status: "missing",
    file: null,
    grade: null,
  },
  {
    name: "Pham Nguyen Dan Quynh",
    id: 1010101010,
    submittime: "11:00 28/4/2023",
    status: "on-time",
    file: ["DanQuynh.pdf", "DanQuynh.pdf", "DanQuynh.pdf"],
    grade: 9,
  },
];
const numOfSubmission = students.reduce((a, student) => {
  return a + student.file ? 1 : 0;
}, 0);
const sumScore = students.reduce((a, student) => {
  return a + student.grade ? student.grade : 0;
}, 0);
const averageScore = sumScore / numOfSubmission;

const ExerciseDetail = () => {
  return (
    <div class="text-[#1B1C1E] flex flex-col bg-[#FFFAF0]">
      <NavbarLecturer />
      {/* Course name */}
      <div class="opacity-60">
        <TeacherCourseName
          name={course.name}
          semester={course.semester}
        ></TeacherCourseName>
      </div>
      {/* Exercise details */}

      <div class="flex flex-col place-items-cente space-y-8 px-20">
        <p class="text-bold text-7xl text-center mt-8">{notification.name}</p>
        {/* Button */}
        <div class="flex flex-row items-center justify-around ">
          <CustomButton
            variant={"filled"}
            className={"px-8 py-0 border-[#CC6666] "}
            text={"Edit"}
          ></CustomButton>
          <CustomButton
            variant={"border"}
            className={"px-8 py-0"}
            text={"Delete"}
          ></CustomButton>
        </div>

        <div class="flex flex-row justify-between text-[37px] px-10">
          <p>{notification.maxpoints} points</p>
          <p>Due date: {notification.duedate}</p>
        </div>
        <div className="flex justify-center">
          <Notification
            title={"Announcement"}
            content={notification.content}
            Files={notification.Files}
          ></Notification>
        </div>

        <div class="flex flex-row justify-between text-[37px] px-10">
          <p>Number of submissions: {numOfSubmission}</p>
          <p>Average score: {averageScore}</p>
        </div>
      </div>
      <RecordTable class="px-10" students={students}></RecordTable>

      <div class="flex place-content-center py-8">
        <CustomButton
          variant={"filled"}
          className={"px-8 py-0"}
          text={"Edit record"}
        ></CustomButton>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ExerciseDetail;
