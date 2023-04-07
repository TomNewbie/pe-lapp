const ExerciseSection = ({ name, deadline, grade }) => {
  return (
    <div class="flex flex-row border-4 border-[#5C0120] rounded-2xl text-[#1B1C1E] font-dongle not-italic items-center justify-between px-9 py-5 mt-12 mx-52">
      <div class="flex flex-row justify-between space-x-11">
        <img
          src="/ExerciseSection/upload-file.png"
          alt="upload file"
          loading="lazy"
        />
        <p class="font-bold text-[37.5px]">{name}</p>
      </div>
      <div class="flex flex-row justify-between space-x-14">
        <p class="font-normal text-[25px]">Due: {deadline}</p>
        <img
          src="/ExerciseSection/tick-image.png"
          alt="tick image"
          loading="lazy"
        />
        <p class="font-normal text-[25px]">{grade}</p>
      </div>
    </div>
  );
};
export default ExerciseSection;
