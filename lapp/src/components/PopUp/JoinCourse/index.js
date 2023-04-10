const JoinCourse = () => {
  return (
    <div class="flex flex-col justify-between space-y-4 px-5 py-2 w-60 h-36 bg-[#F0EAE0] rounded-xl shadow-xl place-items-center">
      <p class="text-3xl h-4">Enter Course Code</p>
      <input
        type="text"
        class="w-52 h-8 bg-[#9F5F5F]/30 rounded-xl text-2xl px-3"></input>
      <button class="w-20 h-8 rounded-xl bg-[#CC6666] text-[28px] text-center hover:bg-[#9E4244] text-[#F1E0CE]">
        <span class="inline-block align-middle">Join</span>
      </button>
    </div>
  );
};

export default JoinCourse;
