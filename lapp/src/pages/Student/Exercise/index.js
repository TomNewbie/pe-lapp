import React from "react";
import {
  Notification,
  NavbarStudent,
  CommentSection,
  StudentCourseName,
  SubmitEx,
  Footer,
} from "../../../components";
import { useParams } from "react-router-dom";
import { useAPI } from "../../../hooks/useAPI";
import { Errorpage } from "../../common";

/** Need to fetch: 
 * course: { name: string; teacher: string;}
* notification: { name: string; maxpoints: number; 
  duedate: string; content: string; Files: { name: string;  }[];}
* comment: { grade: number; content: string;}
 */
const course = { name: "Programming exercise", teacher: "Huynh Trung Hieu" };
const comment = { grade: 100, content: "Very good!" };

// The component renders a page displaying information about a particular exercise, including the exercise name, maximum points, due date, announcement, and a comment section for student view.
const ExerciseDetail = () => {
  const { id } = useParams();
  const { data, pending, error } = useAPI({
    path: "/api/exercises/:id",
    params: { id },
  });
  if (error) {
    return <Errorpage />;
  }
  if (pending) {
    return <div>Loading...</div>;
  }
  console.log(data);
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
    <div class="text-[#1B1C1E] flex flex-col bg-[#FFFAF0]">
      <NavbarStudent></NavbarStudent>
      <div class="mb-16">
        <StudentCourseName
          name={course.name}
          teacher={course.teacher}
        ></StudentCourseName>
      </div>

      <div class="flex flex-row items-center justify-around space-x-5">
        <div class="basis-2/3">
          <div class=" flex flex-col px-2">
            <p class="text-bold text-7xl text-left">{data.name}</p>
            <div class="flex flex-row justify-between text-[37px]">
              <p>Maximum points: 100 points</p>
              <p>Due date: {deadline}</p>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="bg-[#F4C2C2]/30 rounded-3xl w-full h-auto pt-4 pb-6">
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
