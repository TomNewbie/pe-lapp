import { useState, useEffect } from "react";
import CustomButton from "../../CustomButton";
import { createSolution } from "../../../services/course/exercise";
import { useAPI } from "../../../hooks/useAPI";
import { Errorpage, LoadingPage } from "../../../pages/common";

const SubmitEx = ({ status, exerciseId }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const { data, pending, error } = useAPI({
    path: "/api/exercises/:id",
    params: { id: exerciseId },
  });

  useEffect(() => {
    setSelectedFiles(data?.solution_files || []);
  }, [data]);

  if (error) {
    return <Errorpage />;
  }
  if (pending) {
    return <LoadingPage />;
  }

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const handleSubmit = async () => {
    try {
      await createSolution(exerciseId, { files: selectedFiles });
      alert("Solution created successfully!");
    } catch (error) {
      alert("Failed to create solution:" + error);
    }
  };

  return (
    <div className="flex flex-col justify-around p-2 rounded-lg text-xl text-[#1B1C1E] bg-[#FFFCF7] shadow-xl w-[280px] h-fit border">
      <div className="w-full">
        <div className="flex flex-row justify-between place-items-center">
          <p className="pt-2 text-3xl">Your Work</p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="grid bg-[#F4C2C2]/30 rounded-xl px-6">
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
            <div className="flex flex-col gap-3 mb-4 w-52">
              {selectedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex px-2 py-3 border border-[#530619] w-54 rounded-2xl"
                  title={file.name}
                >
                  <img
                    src="/notification/upload.svg"
                    alt=""
                    className="w-9 h-9"
                  />
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
          </div>

          <div className="grid justify-center">
            <CustomButton
              variant="filled"
              className="px-5 pt-1 pb-0.75"
              text="Submit"
              handleButton={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitEx;
