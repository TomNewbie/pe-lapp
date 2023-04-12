const ExerciseSection = ({ name, deadline, grade, status }) => {
  return (
    <div class="flex flex-row w-full h-fit border-4 border-[#5C0120] rounded-2xl text-[#1B1C1E] font-dongle not-italic items-center justify-between px-9 py-5 mt-4 hover:bg-[#B02B3B]/70 hover:text-[#F1E0CE] cursor-pointer">
      <div class="flex flex-row justify-between space-x-11">
        <img
          src="/ExerciseSection/upload-file.png"
          alt="upload file"
          className="w-10 h-10"
          loading="lazy"
        />
        <p class="font-bold text-4xl">{name}</p>
      </div>
      <div class="flex flex-row justify-between space-x-14">
        <p class="font-normal text-[25px]">Due: {deadline}</p>
        <img
          src={
            status === "done"
              ? "/ExerciseSection/tick-image.png"
              : "/ExerciseSection/untick-image.png"
          }
          alt="tick image"
          loading="lazy"
        />
        <p class="font-normal text-[25px]">
          {grade === "null" ? "N/A" : grade}
        </p>
      </div>
    </div>
  );
};
export default ExerciseSection;
