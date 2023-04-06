const ExerciseSection = () => {
  return (
    <div class="flex flex-row border-4 border-[#5C0120] rounded-2xl text-[#1B1C1E] font-dongle not-italic items-center justify-between px-9 py-5 mt-12 mx-52">
      <div class="flex flex-row justify-between space-x-11">
        <img
          src="/ExerciseSection/upload-file.png"
          alt="upload file"
          loading="lazy"
        />
        <p class="font-bold text-[37.5px]">Exercise name</p>
      </div>
      <div class="flex flex-row justify-between space-x-14">
        <p class="font-normal text-[25px]">
          Due: Monday, 13 February 2023, 12:00 AM
        </p>
        <img
          src="/ExerciseSection/tick-image.png"
          alt="tick image"
          loading="lazy"
        />
        <p class="font-normal text-[25px]">N/A</p>
      </div>
    </div>
  );
};
export default ExerciseSection;
