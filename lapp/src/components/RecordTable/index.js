import React, { useState } from "react";
import { gradeStudentSolution } from "../../services/course/exercise";

const RecordTable = ({ data, deadline, exerciseId, onUpdateGrade }) => {
  const [editingGradeId, setEditingGradeId] = useState(""); // State to track the ID of the grade being edited
  const [editedGrade, setEditedGrade] = useState(""); // State to hold the edited grade value

  if (!data) {
    return null;
  }

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

  const zeboi = (d) => {
    setEditingGradeId(false);
    if (!(editedGrade >= 0 && editedGrade <= 100)) {
      alert("Grade must be in between 0 and 100");
      return;
    }
    gradeStudentSolution(exerciseId, d.student.id, {
      grade: editedGrade,
    })
      .then(() => {
        alert("edit succefully");
        setEditedGrade("");
        onUpdateGrade();
      })
      .catch((e) => {
        console.log(e);
        setEditedGrade("");
        setEditingGradeId("");
        alert("fail to edit");
      });
  };

  const findStatus = (submit) => {
    const submitDate = new Date(submit);
    const deadlineDate = new Date(deadline);
    if (isNaN(submitDate.getTime())) {
      // console.log(submitDate + "deadline: " + deadlineDate + "un");

      return "Not submit";
    } else {
      if (submitDate > deadlineDate) {
        // console.log(submitDate + "deadline: " + deadlineDate + "missing");

        return "Late";
      } else {
        // console.log(submitDate + "deadline: " + deadlineDate + "ontime");

        return "Ontime";
      }
    }
  };

  const index = data
    ? data.map((d) => {
        const submitConvert = convertDate(d.submit_time);
        const submittime = d.submit_time;
        const status = findStatus(submittime);
        console.log(d.grade);

        return (
          <tr>
            <td class="py-2 border border-slate-300 text-center ">
              {d.student.name}
            </td>
            <td class="py-4 border border-slate-300 text-center">
              {d.student.id}
            </td>
            <td class="py-4 border border-slate-300 text-center">
              {submitConvert}
            </td>
            <td
              class={
                status === "unsubmit"
                  ? "text-[#7F1734] text-center border border-slate-300"
                  : status === "ontime"
                  ? "py-4 text-center text-[#267c2d] border border-slate-300"
                  : "text-[#FBA70E] text-center border border-slate-300"
              }
            >
              {status}
            </td>
            <td class="py-2 border border-slate-300 justify-center">
              <div>
                {d.file ? (
                  d.file.map((file, index) => (
                    <div key={index}>
                      <div
                        key={file.url}
                        className="flex justify-center flex-shrink-0"
                      >
                        <a href={file.url}>
                          <div className="flex px-2 py-3 border w-56 border-[#530619] rounded-2xl">
                            <img
                              src="/notification/upload.svg"
                              alt=""
                              className="w-9 h-9"
                            />
                            <div
                              className="ml-3 text-3xl font-semibold truncate text-[#530619]"
                              title={file.name}
                            >
                              {file.name}
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <div></div>
                )}
              </div>
            </td>
            <td
              className="py-4 text-center border border-slate-300 hover:bg-[#F4C2C2]/40"
              onMouseEnter={() => {
                setEditingGradeId(d.student.id);
                // setEditedGrade(d.grade);
              }}
              onClick={() => {
                setEditingGradeId(d.student.id);
                // setEditedGrade(d.grade);
              }}
            >
              {editingGradeId === d.student.id && d.file ? (
                <input
                  type="text"
                  // pattern="\d*"
                  placeholder={d.grade}
                  className="w-2/3 text-center"
                  onChange={(e) => setEditedGrade(e.target.value)}
                  onBlur={() => zeboi(d)}
                  maxLength="3"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") zeboi(d);
                  }}
                  onMouseLeave={() => {
                    if (!editedGrade) {
                      setEditingGradeId("");
                    }
                  }}
                />
              ) : (
                <span>{!isNaN(d.grade) ? d.grade : "N/A"}</span>
              )}
            </td>
          </tr>
        );
      })
    : null;
  return (
    <div class="flex flex-col h-full py-16 px-10 text-[30px]">
      <div class="flex-grow overflow-auto">
        <table
          class="relative w-full border-collapse border border-slate-500"
          style={{ tableLayout: "fixed" }}
        >
          <thead>
            <tr class="h-fit">
              <th class="sticky top-0 py-3 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40">
                Name
              </th>
              <th class="sticky top-0 py-3 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40">
                ID
              </th>
              <th class="sticky top-0 py-3 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40">
                Submit time
              </th>
              <th class="sticky top-0 py-3 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40">
                Status
              </th>
              <th class="sticky top-0 py-3 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40">
                File
              </th>
              <th class="sticky top-0 py-3 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40">
                Grade
              </th>
            </tr>
          </thead>
          <tbody class="divide-y">{index}</tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordTable;
