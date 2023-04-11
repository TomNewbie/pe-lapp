import CustomButton from "../../CustomButton";

const JoinCourse = () => {
  return (
    <div class="flex flex-col justify-between space-y-4 px-5 py-2 w-60 h-36 bg-[#FFFCF7] rounded-xl shadow-xl place-items-center">
      <p class="text-3xl h-4">Enter Course Code</p>
      <input
        type="text"
        class="w-52 h-8 bg-[#9F5F5F]/30 rounded-xl text-2xl px-3"></input>
        <CustomButton variant={"filled"} className={"px-8 py-0"} text={"Join"}></CustomButton>
      
    </div>
  );
};

export default JoinCourse;
