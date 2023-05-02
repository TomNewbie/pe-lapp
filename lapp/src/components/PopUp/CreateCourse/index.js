import CustomButton from "../../CustomButton";

const CreateCourse = () => {
  return (
    <div class="w-[800px] h-fit flex flex-col justify-between space-y-4 px-5 py-2 bg-[#FFFCF7] rounded-xl shadow-xl place-items-center text-[#1B1C1E] border">
      <p class="text-3xl mt-2">Enter Course Name</p>
      <input
        type="text"
        class="w-[600px] h-12 bg-[#9F5F5F]/30 rounded-xl text-2xl px-3"></input>
      {/* <button class="w-20 h-8 rounded-xl bg-[#CC6666] text-[28px] text-center hover:bg-[#9E4244] text-[#F1E0CE]">
        <span class="inline-block align-middle">Create</span>
      </button> */}
      <div className="pb-2"><CustomButton variant={"filled"} className={"px-8 py-0"} text={"Create"}></CustomButton></div>
    </div>
  );
};

export default CreateCourse;
