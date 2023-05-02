import CustomButton from "../../CustomButton";

const JoinCourse = () => {
  return (
    <div class="flex flex-col justify-between space-y-4 px-5 py-2 w-[800px] h-fit bg-[#FFFCF7] rounded-xl shadow-xl place-items-center border">
      <p class="text-3xl mt-2">Enter Course Code</p>
      <input
        type="text"
        class="w-[600px] h-12 bg-[#9F5F5F]/30 rounded-xl text-2xl px-3"></input>
        <div className="pb-2"><CustomButton variant={"filled"} className={"px-6 py-0"} text={"Join"}></CustomButton></div>
      
    </div>
  );
};

export default JoinCourse;
