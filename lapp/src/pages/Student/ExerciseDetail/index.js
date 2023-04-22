import React, { useState } from "react";
import {
  Notification,
  NavbarStudent,
  CommentSection,
  StudentCourseName,
  SubmitEx,
  Footer,
} from "../../../components";
const Files = [
  { name: "Probability" },
  { name: "Statistic" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
];

const ExerciseDetail = ({
  coursename,
  teacher,
  exername,
  maxpoints,
  duedate,
}) => {
  return (
    <div class="text-[#1B1C1E] flex flex-col space-y-10 bg-[#FFFAF0] ">
      <NavbarStudent></NavbarStudent>
      {/* <div>
          <p class="text-bold text-4xl">{coursename}</p>
          <p class="text-base">{teacher}</p>
        </div> */}
      <div class="opacity-60">
        <StudentCourseName name={"Test"} teacher={"tets"}></StudentCourseName>
      </div>

      <div class="flex flex-row items-center justify-around space-x-5">
        <div class="basis-2/3">
          <div class=" flex flex-col px-2">
            <p class="text-bold text-7xl text-left">{exername}</p>
            <div class="flex flex-row justify-between text-[37px]">
              <p>{maxpoints} points</p>
              <p>Due date: {duedate}</p>
            </div>
          </div>
          <Notification
            status={"true"}
            title={"Tets"}
            content={"fdc"}
            Files={Files}></Notification>
        </div>

        <div class="mt-32">
          <SubmitEx></SubmitEx>
        </div>
      </div>

      <div class="pl-72">
        <CommentSection grade={43} comment={"excelent"}></CommentSection>
      </div>

      {/* <Footer></Footer> */}
    </div>
  );
};

export default ExerciseDetail;
