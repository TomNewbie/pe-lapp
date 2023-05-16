import { addCourseParticipant } from "../../../services/course/participant";
import CustomButton from "../../CustomButton";
import { useState } from "react";

const AddStudent = ({ handleClose, courseId, onAddStudent }) => {
  const [studentId, setStudentId] = useState("");
  const handleAddStudent = async () => {
    addCourseParticipant(courseId, studentId)
      .then(() => {
        alert("Add student " + studentId + " successfully!");
        onAddStudent();
      })
      .catch((error) => {
        alert("Failed to add student: " + error);
      }); // Log the course code
    handleClose();
  };
  const handleInputChange = (event) => {
    setStudentId(event.target.value); // Update the course code state
  };
  return (
    <div className="absolute flex items-center justify-center w-full h-screen bg-black/60">
      <div class="w-[800px] h-fit flex flex-col justify-between space-y-4 px-5 py-2 bg-[#FFFCF7] rounded-xl shadow-xl place-items-center text-[#1B1C1E] border">
        <p class="text-6xl mt-2">Enter Student ID</p>
        <input
          type="text"
          class="w-[600px] h-12 bg-[#9F5F5F]/30 rounded-xl text-2xl px-3"
          value={studentId} // Bind the input value to the courseCode state
          onChange={handleInputChange}
        ></input>
        <div className="flex flex-row pt-8 space-x-20">
          <CustomButton
            variant={"filled"}
            className={"px-8 py-0"}
            text={"Add"}
            handleButton={handleAddStudent}
          ></CustomButton>
          <CustomButton
            variant={"filled"}
            className={"px-8 py-0"}
            text={"Cancel"}
            handleButton={handleClose}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
