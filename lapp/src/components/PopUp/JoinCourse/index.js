import CustomButton from "../../CustomButton";

const JoinCourse = ({ handleClose }) => {
  return (
    <div className="absolute flex items-center justify-center w-full h-full bg-black/60">
      <div class="flex flex-col justify-between space-y-4 px-5 py-2 w-[600px] h-[300px] bg-[#FFFCF7] rounded-xl shadow-xl place-items-center">
        <p class="text-8xl h-4 mb-16">Enter Course Code</p>
        <div className="mt-8">
          <input
            type="text"
            class="w-96 h-12 bg-[#9F5F5F]/30 rounded-xl text-4xl"
          ></input>
        </div>
        <CustomButton
          variant={"filled"}
          className={"px-14 py-1.5"}
          text={"Join"}
          handleButton={handleClose}
        ></CustomButton>
      </div>
    </div>
  );
};

export default JoinCourse;
