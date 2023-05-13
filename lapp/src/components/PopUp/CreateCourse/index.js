import CustomButton from "../../CustomButton";

const CreateCourse = ({ handleClose }) => {
  return (
    <div className="absolute flex items-center justify-center w-full h-full bg-black/60">
      <div class="w-[800px] h-fit flex flex-col justify-between space-y-4 px-5 py-2 bg-[#FFFCF7] rounded-xl shadow-xl place-items-center text-[#1B1C1E] border">
        <p class="text-3xl mt-2">Enter Course Name</p>
        <input
          type="text"
          class="w-[600px] h-12 bg-[#9F5F5F]/30 rounded-xl text-2xl px-3"
        ></input>
        <CustomButton
          variant={"filled"}
          className={"px-8 py-0"}
          text={"Create"}
          handleButton={handleClose}
        ></CustomButton>
      </div>
    </div>
  );
};

export default CreateCourse;
