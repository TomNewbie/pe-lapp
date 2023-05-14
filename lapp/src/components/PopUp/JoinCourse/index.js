import { useState } from "react";
import CustomButton from "../../CustomButton";
import { joinCourse } from "../../../services/course";

const JoinCourse = ({ handleClose, onJoinCourse }) => {
  const [courseCode, setCourseCode] = useState(""); // State to store the course code

  const handleJoinCourse = () => {
    joinCourse(courseCode)
      .then(() => {
        console.log("Course joined successfully!");
        onJoinCourse();
      })
      .catch((error) => {
        console.error("Failed to join course:", error);
      }); // Log the course code
    handleClose();
  };

  const handleInputChange = (event) => {
    setCourseCode(event.target.value); // Update the course code state
  };

  return (
    <div className="absolute flex items-center justify-center w-full h-full bg-black/60">
      <div className="flex flex-col justify-between space-y-4 px-5 py-2 w-[800px] h-fit bg-[#FFFCF7] rounded-xl shadow-xl place-items-center border">
        <p className="mt-2 text-3xl">Enter Course Code</p>
        <div className="mt-8">
          <input
            type="text"
            className="w-[600px] h-12 bg-[#9F5F5F]/30 rounded-xl text-2xl px-3"
            value={courseCode} // Bind the input value to the courseCode state
            onChange={handleInputChange} // Handle input changes
          />
        </div>
        <div className="pb-2">
          <CustomButton
            variant={"filled"}
            className={"px-6 py-0"}
            text={"Join"}
            handleButton={handleJoinCourse}
          />
        </div>
        <div className="pb-2">
          <CustomButton
            variant={"filled"}
            className={"px-6 py-0"}
            text={"Cancel"}
            handleButton={handleClose}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinCourse;
