const ExerciseSection = ({ exercise }) => {
  const convertDate = (timestamp) => {
    const date = new Date(timestamp);

    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    const hour = date.getHours();

    const formattedDate = `${month} ${year} ${hour}:00`;

    return formattedDate;
  };
  const deadline = convertDate(exercise.deadline);
  return (
    <div>
      <div class="flex flex-row border-4 border-[#5C0120] rounded-2xl text-[#1B1C1E] not-italic items-center justify-between px-9 py-3 mt-4 w-full  hover:bg-[#B02B3B] hover:text-[#FFFAF0]">
        <div class="flex flex-row justify-between space-x-11 items-center">
          <img src="/ExerciseSection/upload-file.png" alt="upload file" />
          <p class="font-bold text-4xl">{exercise.name}</p>
        </div>
        <div class="flex flex-row justify-between space-x-14">
          <p class="font-normal text-3xl">Due: {deadline}</p>
          <img
            src={
              exercise.submitted === true
                ? "/ExerciseSection/tick-image.png"
                : "/ExerciseSection/untick-image.png"
            }
            alt="tick"
          />
        </div>
      </div>
    </div>
  );
};
export default ExerciseSection;
