import { createCourse, updateCourse } from "../../../services/course";
import { useState, useEffect } from "react";
import CustomButton from "../../CustomButton";

const backgrounds = [
  "https://firebasestorage.googleapis.com/v0/b/pe-lapp-384707.appspot.com/o/production%2Fdefault%2Fcourse_image%2FCourseStuPic.png?alt=media&token=9bb5834f-2f8e-47d5-b7e9-526891de2bab",
  "https://firebasestorage.googleapis.com/v0/b/pe-lapp-384707.appspot.com/o/production%2Fdefault%2Fcourse_image%2FCourseTePic.png?alt=media&token=1c2403bd-5370-423b-b279-8eb8d5256ac0",
  "https://firebasestorage.googleapis.com/v0/b/pe-lapp-384707.appspot.com/o/production%2Fdefault%2Fcourse_image%2Fchristianbaun.jpg?alt=media&token=39b8e23c-f935-4164-aac0-e2719874f0c9",
  "https://s3.memeshappen.com/memes/of-course-.jpg",
  "https://firebasestorage.googleapis.com/v0/b/pe-lapp-384707.appspot.com/o/production%2Fdefault%2Fcourse_image%2Flogofatu.png?alt=media&token=e9b9d795-8593-4db1-9847-df60a86d52fc",
  "https://firebasestorage.googleapis.com/v0/b/pe-lapp-384707.appspot.com/o/production%2Fdefault%2Fcourse_image%2Fvgu.png?alt=media&token=4abc5fcf-bab0-4e16-80aa-9469c5bd8db9",
];

const EditCourse = ({ handleClose, onEditCourse, editCourse }) => {
  const [courseName, setCourseName] = useState("");
  const [picture, setPicture] = useState("");
  const [semester, setSemester] = useState("");
  const courseId = editCourse._id;
  useEffect(() => {
    setCourseName(editCourse.name);
    setPicture(editCourse.picture);
    setSemester(editCourse.semester);
  }, [editCourse]);
  const handleUpdateCourse = () => {
    const fields = {
      name: courseName,
      picture,
      semester,
    };
    updateCourse(courseId, fields)
      .then(() => {
        alert("Course updated successfully");
        onEditCourse();
      })
      .catch((error) => {
        alert("Failed to update course:" + error);
        // Error handling code
      });

    handleClose();
  };

  const handleCourseName = (event) => {
    setCourseName(event.target.value);
  };

  const handleSemester = (event) => {
    setSemester(event.target.value);
  };

  const handleImageSelect = (event) => {
    setPicture(event.target.value);
  };

  return (
    <div className="absolute z-30 flex items-center justify-center w-full h-screen bg-black/60">
      <div className="w-[800px] h-fit flex flex-col justify-between space-y-4 px-5 py-2 bg-[#FFFCF7] rounded-xl shadow-xl place-items-center text-[#1B1C1E] border">
        <p className="mt-2 text-6xl">Create Course</p>

        <div className="flex flex-col items-center">
          <input
            type="text"
            className="w-[600px] h-12 bg-[#9F5F5F]/30 rounded-xl text-3xl px-3"
            value={courseName}
            placeholder="Please enter course name"
            onChange={handleCourseName}
          />

          <p className="mt-4 text-3xl">Select your background</p>

          <div className="flex flex-wrap gap-3 mb-8 flex-row-3">
            {backgrounds.map((bg) => {
              return (
                <label className="image-option">
                  <input
                    type="radio"
                    value={bg}
                    checked={picture === bg}
                    onChange={handleImageSelect}
                  />
                  <img
                    src={bg}
                    alt=""
                    className="w-24 h-24 border-2 rounded-xl"
                  />
                </label>
              );
            })}
          </div>

          <input
            type="semester"
            className="w-[600px] h-12 bg-[#9F5F5F]/30 rounded-xl text-3xl px-3"
            value={semester}
            onChange={handleSemester}
            placeholder="Please enter semester"
          />
        </div>

        <div className="flex flex-row pt-8 space-x-20">
          <CustomButton
            variant={"filled"}
            className={"px-8 py-0"}
            text={"Update"}
            handleButton={handleUpdateCourse}
          />
          <CustomButton
            variant={"filled"}
            className={"px-8 py-0"}
            text={"Cancel"}
            handleButton={handleClose}
          />
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
