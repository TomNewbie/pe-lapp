import React, { useState } from "react";
import {
  Notification,
  NavbarLecturer,
  TeacherCourseName,
  RecordTable,
  CustomButton,
  Footer,
} from "../../../components";
import { PostAnnEx } from "../../../components";
import { Link, useParams } from "react-router-dom";
import { useAPI } from "../../../hooks/useAPI";
import { Errorpage, LoadingPage } from "../../common";

/** Need to fetch:
 * course:
 *      {name: string;semester: string;}
 * notification:
 *      {name: string; maxpoints: number; duedate: string;
 *      content: string; Files: {name: string;[];}
 * students:
 *      {string; id: number; submittime: string;
 *      status: string; file: string[]/null; grade: number/null;}
 */

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
const numOfSubmission = (student) => {
  students.reduce((a, student) => {
    return a + student.file ? 1 : 0;
  }, 0);
};
const sumScore = (student) => {
  students.reduce((a, student) => {
    return a + student.grade ? student.grade : 0;
  }, 0);
};

const averageScore = (student) => {
  return sumScore(student) / numOfSubmission(student);
};

const convertDate = (timestamp) => {
  const date = new Date(timestamp);

  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const hour = date.getHours();

  const formattedDate = `${month} ${year} ${hour}:00`;

  return formattedDate;
};

/**Component that displays the details of a exercise,
 * including the exercise name, due date, maximum points,
 * announcement, number of submissions, and average score.
 * It also allows the lecturer to edit and delete the exercise,
 * view the submission records of the students, and edit the records. */
const ExerciseDetail = () => {
  const { id } = useParams();
  const { data, pending, error } = useAPI({
    path: "/api/exercises/:id",
    params: { id },
  });
  // logic for modal
  const [exerciseModal, setExerciseModal] = useState(false);

  const toggleExerciseModal = () => {
    const body = document.body;
    if (exerciseModal) {
      body.classList.remove("modal-open");
    } else {
      body.classList.add("modal-open");
    }
    setExerciseModal(!exerciseModal);
  };

  if (error) {
    return <Errorpage />;
  }
  if (pending) {
    return <LoadingPage />;
  }

  const numOfSubmission = data.solutions.length;
  const sumScore = data.solutions?.reduce((a, solution) => {
    return a + (solution.grade ? solution.grade : 0);
  }, 0);
  const averageScore = sumScore / numOfSubmission;
  const convertDate = (timestamp) => {
    const date = new Date(timestamp);

    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    const hour = date.getHours();

    const formattedDate = `${month} ${year} ${hour}:00`;

    return formattedDate;
  };
  const deadline = convertDate(data.deadline);

  return (
    <div class="relative text-[#1B1C1E] flex flex-col bg-[#FFFAF0]">
      <div>
        {exerciseModal && (
          <PostAnnEx
            type={"exercise"}
            handleClose={toggleExerciseModal}
          ></PostAnnEx>
        )}
      </div>

      <NavbarLecturer />
      {/* Course name */}
      <div>
        <TeacherCourseName course={course}></TeacherCourseName>
      </div>
      {/* Exercise details */}

      <div class="flex flex-col space-y-8 px-20">
        <p class="text-bold text-7xl text-center mt-8">{data.name}</p>
        {/* Button */}
        <div class="flex flex-row items-center justify-around ">
          <CustomButton
            variant={"filled"}
            className={"px-8 py-0 border-[#CC6666] "}
            text={"Edit"}
            handleButton={toggleExerciseModal}
          ></CustomButton>
          <Link to="/allcourses">
            <CustomButton
              variant={"border"}
              className={"px-8 py-0"}
              text={"Delete"}
              handleButton={() => {
                console.log("Delete this course");
              }}
            ></CustomButton>
          </Link>
        </div>

        <div class="flex flex-row justify-between text-[37px] px-10">
          <p>100 points</p>
          <p>Due date: {deadline}</p>
        </div>
        <div className="flex justify-center">
          <div className="bg-[#F4C2C2]/30 rounded-3xl w-3/4 h-auto pt-4 pb-6">
            <div className="flex flex-col ml-4 space-y-4">
              <div className="text-3xl font-light">{data.description}</div>
            </div>
            <div className="flex flex-row ml-4 space-x-4">
              {data.exercise_files?.map((file) => (
                <a href={file.url}>
                  <div className="flex px-2 py-3 border border-black w-fit rounded-2xl">
                    <img
                      src="/notification/upload.svg"
                      alt=""
                      className="w-9 h-9"
                    ></img>
                    <div className="ml-3 text-3xl font-semibold">
                      {file.name}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div class="flex flex-row justify-between text-[37px] px-10">
          <p>Number of submissions: {numOfSubmission}</p>
          <p>Average score: {averageScore}</p>
        </div>
      </div>
      {data.solutions ? (
        <RecordTable
          class="px-10"
          data={data.solutions}
          deadline={data.deadline}
        ></RecordTable>
      ) : (
        <div></div>
      )}

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
