import React, { useState } from "react";
import {
  NavbarLecturer,
  TeacherCourseName,
  RecordTable,
  CustomButton,
  Footer,
} from "../../../components";
import { Link, useParams, useLocation } from "react-router-dom";
import { useAPI } from "../../../hooks/useAPI";
import { Errorpage, LoadingPage } from "../../common";
import EditExercise from "../../../components/PopUp/EditExercise";
import { deleteExercise } from "../../../services/course/exercise";

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

/**Component that displays the details of a exercise,
 * including the exercise name, due date, maximum points,
 * announcement, number of submissions, and average score.
 * It also allows the lecturer to edit and delete the exercise,
 * view the submission records of the students, and edit the records. */
const ExerciseDetail = () => {
  const location = useLocation();
  const courseId = location.state?.courseId;
  const { id } = useParams();
  const exerciseId = id;
  const { data, pending, error, refresh } = useAPI({
    path: "/api/exercises/:id",
    params: { id },
  });
  const {
    data: course,
    pending: coursePending,
    error: courseError,
  } = useAPI({
    path: "/api/course/:id",
    params: { courseId },
  });
  // logic for modal
  const [editExerciseModal, setEditExerciseModal] = useState(false);
  const [exercise, setExercise] = useState([]);

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

  if (error || courseError) {
    return <Errorpage />;
  }
  if (pending || coursePending) {
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
  const handleDelete = async () => {
    deleteExercise(exerciseId)
      .then(() => {
        // Handle successful deletion of course content
        alert("Exercise deleted successfully.");
        refresh();
      })
      .catch((error) => {
        // Handle error during course content deletion
        alert("Error deleting exercise:" + error);
      });
  };
  console.log(course);

  return (
    <div class="relative text-[#1B1C1E] flex flex-col bg-[#FFFAF0]">
      {editExerciseModal && (
        <EditExercise
          handleClose={toggleEditExerciseModal}
          courseId={courseId}
          onUpdateExercise={refresh}
          exercise={data}
          exerciseId={id}
        ></EditExercise>
      )}

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
            handleButton={() => {
              toggleEditExerciseModal();
              setExercise(data);
            }}
          ></CustomButton>
          <Link to={`/course/` + courseId}>
            <CustomButton
              variant={"border"}
              className={"px-8 py-0"}
              text={"Delete"}
              handleButton={handleDelete}
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
