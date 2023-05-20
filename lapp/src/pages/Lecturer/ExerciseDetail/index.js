import React, { useEffect, useState } from "react";
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
import { Doughnut } from "react-chartjs-2";
import { dataSubmit } from "../../../chart/data";

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
    params: { id: courseId },
  });
  // logic for modal
  const [editExerciseModal, setEditExerciseModal] = useState(false);
  const [exercise, setExercise] = useState([]);

  // console.log(data);
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

  const numOfSubmission = data.solutions?.reduce((a, solution) => {
    return a + (solution.file ? 1 : 0);
  }, 0);

  const sumScore = data.solutions?.reduce((a, solution) => {
    return a + (solution.grade ? solution.grade : 0);
  }, 0);
  const averageScore = sumScore / numOfSubmission;
  const convertDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp);

    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
    const hour = date.getHours();

    const formattedDate = `${month} ${day}, ${year} ${hour}:00`;

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
  const onTime = data.solutions?.reduce((a, solution) => {
    if (
      solution.file &&
      new Date(solution.submit_time) <= new Date(data.deadline)
    ) {
      // console.log(
      //   "nani" + new Date(solution.submit_time) <= new Date(solution.deadline)
      // );
      return a + 1;
    }
    return a;
  }, 0);
  const noSubmit = data.solutions?.reduce((a, solution) => {
    if (!solution.file) {
      return a + 1;
    }
    return a;
  }, 0);
  const late = data.solutions?.reduce((a, solution) => {
    if (
      solution.file &&
      new Date(solution.submit_time) > new Date(data.deadline)
    ) {
      return a + 1;
    }
    return a;
  }, 0);
  // console.log("ontime " + onTime);
  // console.log("late " + late);
  // console.log("nosubmit " + noSubmit);
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
        <TeacherCourseName course={course} />
      </div>
{/* Exercise details */}
      <div className="flex flex-col space-y-8 px-20">
        <p className="text-bold text-7xl text-center mt-8">{data.name}</p>

        <div className="flex flex-row items-center justify-around">
          <CustomButton
            variant="filled"
            className="px-8 py-0 border-[#CC6666]"
            text="Edit"
            handleButton={() => {
              toggleEditExerciseModal();
              setExercise(data);
            }}
          />
          <Link to={`/course/${courseId}`}>
            <CustomButton
              variant="border"
              className="px-8 py-0"
              text="Delete"
              handleButton={handleDelete}
            />
          </Link>
        </div>

        <div className="flex flex-row">
          <div className="w-2/3">
            <div className="flex flex-row justify-between text-[37px] px-10">
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
                    <a href={file.url} key={file.name}>
                      <div className="flex px-2 py-3 border border-black w-fit rounded-2xl">
                        <img
                          src="/notification/upload.svg"
                          alt=""
                          className="w-9 h-9"
                        />
                        <div className="ml-3 text-3xl font-semibold">
                          {file.name}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between text-[37px] text-center px-8 w-1/3 tracking-tight">
            <div className="bg-[#E8BFAE]/50 rounded-3xl w-44 h-36 flex flex-col items-center justify-center space-y-8">
              <p className="text-8xl h-8">{numOfSubmission} </p>
              <p className="">Submissions</p>
            </div>
            <div className="bg-[#F4DACD]/70 rounded-3xl w-44 h-36 flex flex-col items-center justify-center space-y-8 ">
              <div className="text-8xl  h-8">{averageScore}</div>
              <p className="">Average score</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex w-96 h-96 px-12">
          <Doughnut data={dataSubmit(onTime, noSubmit, late)} />
        </div>
      </div>

      {data.solutions ? (
        <RecordTable
          className="px-10"
          data={data.solutions}
          deadline={data.deadline}
          exerciseId={id}
          onUpdateGrade={refresh}
        />
      ) : (
        <div></div>
      )}

      <Footer />
    </div>
  );
};

export default ExerciseDetail;
