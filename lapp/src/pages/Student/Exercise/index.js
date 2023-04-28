import React from "react";
import {
  Notification,
  NavbarStudent,
  CommentSection,
  StudentCourseName,
  SubmitEx,
  Footer,
} from "../../../components";
const course = { name: "Programming exercise", teacher: "Huynh Trung Hieu" };
const notification = {
  name: "Mock test 1",
  maxpoints: 100,
  duedate: "00:00 30/4/2023",
  content:
    "This is the exercise for this week. You have to submit it on time. If you have any question, please feel free to contact me.",
  Files: [{ name: "Probability" }, { name: "Statistic" }],
};
const comment = { grade: 100, content: "Very good!" };

const ExerciseDetail = () => {
  return (
    <div class="text-[#1B1C1E] flex flex-col bg-[#FFFAF0]">
      <NavbarStudent></NavbarStudent>
      <div class="opacity-60 mb-16">
        <StudentCourseName
          name={course.name}
          teacher={course.teacher}
        ></StudentCourseName>
      </div>

      <div class="flex flex-row items-center justify-around space-x-5">
        <div class="basis-2/3">
          <div class=" flex flex-col px-2">
            <p class="text-bold text-7xl text-left">{notification.name}</p>
            <div class="flex flex-row justify-between text-[37px]">
              <p>{notification.maxpoints} points</p>
              <p>Due date: {notification.duedate}</p>
            </div>
          </div>
          <Notification
            title={"Announcement"}
            content={notification.content}
            Files={notification.Files}
          ></Notification>
        </div>

        <div class="mt-32">
          <SubmitEx
            handleSubmit={() => {
              console.log("submit");
            }}
          ></SubmitEx>
        </div>
      </div>

      <div class="pl-72 mt-24 mb-24">
        <CommentSection
          grade={comment.grade}
          comment={comment.content}
        ></CommentSection>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ExerciseDetail;
