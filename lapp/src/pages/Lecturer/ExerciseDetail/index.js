import React, { useState } from "react";
import {
  NavbarLecturer,
  TeacherCourseName,
  RecordTable,
  CustomButton,
  Footer,
} from "../../../components";
import { PostAnnEx } from "../../../components";
import { Link, useParams, useLocation } from "react-router-dom";
import { useAPI } from "../../../hooks/useAPI";
import { Errorpage, LoadingPage } from "../../common";
import EditExercise from "../../../components/PopUp/EditExercise";

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

/**Component that displays the details of a exercise,
 * including the exercise name, due date, maximum points,
 * announcement, number of submissions, and average score.
 * It also allows the lecturer to edit and delete the exercise,
 * view the submission records of the students, and edit the records. */
const ExerciseDetail = () => {
  const location = useLocation();
  const courseId = location.state?.courseId;

  console.log("Previous of Previous Link:", courseId);
  const { id } = useParams();
  const { data, pending, error, refresh } = useAPI({
    path: "/api/exercises/:id",
    params: { id },
  });
  // logic for modal
  const [exerciseModal, setExerciseModal] = useState(false);
  const [editExerciseModal, setEditExerciseModal] = useState(false);

  const toggleExerciseModal = () => {
    const body = document.body;
    if (exerciseModal) {
      body.classList.remove("modal-open");
    } else {
      body.classList.add("modal-open");
    }
    setExerciseModal(!exerciseModal);
  };
  const toggleEditExerciseModal = () => {
    const body = document.body;
    if (editExerciseModal) {
      body.classList.remove("modal-open");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      body.classList.add("modal-open");
    }
    setEditExerciseModal(!editExerciseModal);
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
      {editExerciseModal && (
        <EditExercise
          handleClose={toggleEditExerciseModal}
          courseId={12}
          onUpdateExercise={refresh}
          editExerciseId={id}
        ></EditExercise>
      )}
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
