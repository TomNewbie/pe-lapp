import { createCourse } from "../../../services/course";
import { useState } from "react";
import CustomButton from "../../CustomButton";

const CreateCourse = ({ handleClose, onCreateCourse }) => {
  const [courseName, setCourseName] = useState(""); // State to store the course code

  const handleCreateCourse = async () => {
    try {
      const fields = {
        name: courseName,
        picture: null,
        semester: null,
      };

      const response = await createCourse(fields);
      const { courseId } = response;
      onCreateCourse();
      console.log("Course created successfully! Course ID:", courseId);
    } catch (error) {
      console.error("Failed to create course:", error);
    }
    handleClose();
  };

  const handleInputChange = (event) => {
    setCourseName(event.target.value); // Update the course code state
  };
  return (
    <div className="absolute z-30 flex items-center justify-center w-full h-screen bg-black/60">
      <div class="w-[800px] h-fit flex flex-col justify-between space-y-4 px-5 py-2 bg-[#FFFCF7] rounded-xl shadow-xl place-items-center text-[#1B1C1E] border">
        <p class="text-6xl mt-2">Enter Course Name</p>
        <input
          type="text"
          class="w-[600px] h-12 bg-[#9F5F5F]/30 rounded-xl text-2xl px-3"
          value={courseName} // Bind the input value to the courseCode state
          onChange={handleInputChange}
        ></input>
        <div className="flex flex-row pt-8 space-x-20">
          <CustomButton
            variant={"filled"}
            className={"px-8 py-0"}
            text={"Create"}
            handleButton={handleCreateCourse}
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

export default CreateCourse;
