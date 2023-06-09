import { updateCourseContent } from "../../../services/course/content";
import CustomButton from "../../CustomButton";
import { useState, useEffect } from "react";

const EditPost = ({ handleClose, courseId, editContent, onUpdateContent }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [removedFiles, setRemovedFiles] = useState([]);
  const [newlySelectedFiles, setNewlySelectedFiles] = useState([]);

  useEffect(() => {
    setTitle(editContent.title);
    setBody(editContent.body);
    setSelectedFiles(editContent.files);
  }, [editContent]);
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const filteredFiles = files.filter((file) => !removedFiles.includes(file));
    setSelectedFiles([...selectedFiles, ...filteredFiles]);
    setNewlySelectedFiles([...newlySelectedFiles, ...filteredFiles]);
  };

  const handleRemoveFile = (index) => {
    const removedFile = selectedFiles[index];
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
    if (
      removedFile &&
      removedFile.url &&
      !newlySelectedFiles.includes(removedFile)
    ) {
      setRemovedFiles([...removedFiles, removedFile.url]); // Add the URL of the removed file
    }
  };

  const handleSubmit = async () => {
    const fields = {
      title,
      body,
      remove: removedFiles || null, // URLs of files to be removed
      files: newlySelectedFiles || null, // Array of new files to be uploaded
    };
    updateCourseContent(courseId, editContent._id, fields)
      .then(() => {
        alert("Course content updated successfully");
        // Additional code after successful update
        onUpdateContent();
      })
      .catch((error) => {
        alert("Failed to update course content:" + error);
        // Error handling code
      });

    handleClose();
  };

  const isButtonDisabled =
    title === editContent.title &&
    body === editContent.body &&
    selectedFiles.length === editContent.files.length &&
    selectedFiles.every((file, index) => file === editContent.files[index]);

  return (
    <div className="absolute z-20 flex items-center justify-center w-full h-screen bg-black/60">
      <div class="flex flex-col justify-between space-y-3 px-5 py-2 w-2/3 h-fit bg-[#FFFCF7] text-[#1B1C1E] rounded-xl shadow-xl place-items-center text-3xl">
        <input
          type="text"
          placeholder="Enter title here"
          class="bg-[#9F5F5F]/30 rounded-xl px-3 w-full text-3xl"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>

        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full border-[#560319] border-2 rounded-xl text-3xl"
          placeholder="Announce something..."
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
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
          {!isButtonDisabled && (
            <CustomButton
              variant={"filled"}
              text={"Post"}
              className={"px-5 pt-1 pb-0.75"}
              handleButton={handleSubmit}
            ></CustomButton>
          )}
          <CustomButton
            variant={"border"}
            text={"Cancel"}
            className={"px-2 pt-0.5 pb-0.25"}
            handleButton={() => {
              console.log("close");
              handleClose();
            }}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
