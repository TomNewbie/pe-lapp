import { createCourseContent } from "../../../services/course/content";
import { createExercise } from "../../../services/course/exercise";
import CustomButton from "../../CustomButton";
import { useState } from "react";

const PostAnnEx = ({
  type,
  handleClose,
  courseId,
  onAddExercise,
  onAddContent,
}) => {
  const [title, setTitle] = useState("");
  const [duedate, setDueDate] = useState("");
  const [content, setContent] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };
  console.log(selectedFiles);
  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const handleSubmit = async () => {
    if (type === "exercise") {
      const deadline = new Date(duedate);
      const fields = {
        name: title,
        deadline,
        files: selectedFiles,
        description: content,
      };
      createExercise(courseId, fields)
        .then(() => {
          // Handle successful creation of exercise
          console.log("Exercise created successfully.");
        })
        .catch((error) => {
          // Handle error during exercise creation
          alert("Error creating exercise:" + error);
        });
    } else {
      const fields = { files: selectedFiles, title, body: content };
      createCourseContent(courseId, fields)
        .then(() => {
          // Handle successful creation of course content
          alert("Course content created successfully.");
        })
        .catch((error) => {
          // Handle error during course content creation
          alert("Error creating course content:" + error);
        });
    }
    handleClose();
  };
  return (
    <div className="absolute flex items-center justify-center w-full h-screen bg-black/60">
      <div class="flex flex-col justify-between space-y-3 px-5 py-2 w-2/3 h-fit bg-[#FFFCF7] text-[#1B1C1E] rounded-xl shadow-xl place-items-center text-3xl">
        <input
          type="text"
          placeholder="Enter title here"
          class="bg-[#9F5F5F]/30 rounded-xl px-3 w-full text-3xl"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        {type === "exercise" ? (
          <input
            type="date"
            placeholder="Enter due date here"
            class="bg-[#9F5F5F]/30 rounded-xl px-3 w-full text-3xl"
            onChange={(event) => {
              setDueDate(event.target.value);
            }}
          ></input>
        ) : (
          <div></div>
        )}

        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full border-[#560319] border-2 rounded-xl text-3xl"
          placeholder="Announce something..."
          onChange={(event) => {
            setContent(event.target.value);
          }}
        ></textarea>

        <label htmlFor="fileInput" className="mb-4 custom-file-input w-52">
          <input
            id="fileInput"
            type="file"
            onChange={handleFileChange}
            multiple
            className="hidden"
          />
          <div className="flex justify-center p-2 mt-4 text-3xl border-2 border-black rounded-xl">
            <img
              class="w-10 h-10 place-self-center hover:bg-[#9F5F5F]/30 rounded-full"
              src="/PostAnnEx/Upload.png"
              alt=""
            />
            <span className="ml-2">Choose Files</span>
          </div>
        </label>
        <div className="flex flex-wrap w-full gap-3">
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="flex px-2 py-3 border border-[#530619] w-48 rounded-2xl"
              title={file.name}
            >
              <img src="/notification/upload.svg" alt="" className="w-9 h-9" />
              <div className="ml-3 text-3xl font-semibold truncate text-[#530619]">
                {file.name}
              </div>
              <button
                className="ml-auto text-[#530619] hover:text-red-500"
                onClick={() => handleRemoveFile(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div class=" flex flex-row justify-center space-x-48 w-full text-xl pb-2">
          <CustomButton
            variant={"filled"}
            text={"Post"}
            className={"px-5 pt-1 pb-0.75"}
            handleButton={handleSubmit}
          ></CustomButton>
          <CustomButton
            variant={"border"}
            text={"Cancel"}
            className={"px-2 pt-0.5 pb-0.25"}
            handleButton={handleClose}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default PostAnnEx;
