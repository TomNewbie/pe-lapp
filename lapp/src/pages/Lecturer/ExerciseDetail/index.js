import React, { useState } from "react";
import {
  Notification,
  NavbarLecturer,
  TeacherCourseName,
  RecordTable,
  CustomButton,
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
  exername,
  maxpoints,
  duedate,
  submission,
  avescore,
}) => {
  return (
    <div class="text-[#1B1C1E] flex flex-col bg-[#FFFAF0]">
      <NavbarLecturer />
      {/* Course name */}
      <div class="opacity-60">
        <TeacherCourseName
          name={"Test"}
          semester={"SS2023"}></TeacherCourseName>
      </div>
      {/* Exercise details */}

      <div class="flex flex-col place-items-cente space-y-8 px-20">
        <p class="text-bold text-7xl text-center mt-8">{exername}</p>
        {/* Button */}
        <div class="flex flex-row items-center justify-around">
          <CustomButton
            variant={"filled"}
            className={"px-8 py-0 border-[#CC6666] "}
            text={"Edit"}></CustomButton>
          <CustomButton
            variant={"border"}
            className={"px-8 py-0"}
            text={"Delete"}></CustomButton>
        </div>

        <div class="flex flex-row justify-between text-[37px] px-10">
          <p>{maxpoints} points</p>
          <p>Due date: {duedate}</p>
        </div>
        <div class="">
          <Notification
            status={"true"}
            title={"Tets"}
            content={"fdc"}
            Files={Files}></Notification>
        </div>

        <div class="flex flex-row justify-between text-[37px] px-10">
          <p>{submission} submitted</p>
          <p>Average score: {avescore}</p>
        </div>
      </div>
      <RecordTable class="px-10"></RecordTable>

      <div class="flex place-content-center">
        <CustomButton
          variant={"filled"}
          className={"px-8 py-0"}
          text={"Edit record"}></CustomButton>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ExerciseDetail;
