const CourseHeading = () => {
  return (
    <div class="flex flex-col justify-center items-center mt-40 font-['Dongle'] text-[#1B1C1E] not-italic space-y-1">
      <h1 class="font-bold text-[60px] leading-[80px]">COURSE NAME</h1>
      <h2 class="font-normal text-[26.25px] leading-[38px]">Teacher</h2>
      <button
        // onClick={() => setShow(true)}
        className="bg-[#CC6666] opacity-80 mt-0 py-0 px-6 leading-[30px] rounded-xl border hover:border-slate-500 text-[26.25px] text-white cursor-pointer"
      >
        Progress
      </button>
    </div>
  );
};

export default CourseHeading;
