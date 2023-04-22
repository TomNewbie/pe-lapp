import React, { useState } from "react";
import {
  Notification,
  NavbarStudent,
  CommentSection,
  StudentCourseName,
  SubmitEx,
  Footer,
} from "../../../components";
const files = [{ name: "Probability" }, { name: "Statistic" }];

const ExerciseDetail = ({
  coursename,
  teacher,
  exername,
  maxpoints,
  duedate,
  files,
}) => {
  return (
    <div class="text-[#1B1C1E] flex flex-col bg-[#FFFAF0]">
      <div class="opacity-60 mb-16">
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
            Files={files}
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
        <CommentSection grade={43} comment={"excelent"}></CommentSection>
      </div>
    </div>
  );
};

const Exercise = () => {
  return (
    <div>
      <NavbarStudent></NavbarStudent>
      <ExerciseDetail
        exername={"Test"}
        maxpoints={45}
        duedate={"12/3/2022"}
        files={files}
      />
      <Footer></Footer>
    </div>
  );
};
export default Exercise;
