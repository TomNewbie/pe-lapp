const Assignment = ({ exercise }) => {
  if (!exercise) {
    return null;
  }
  //turn deadline from api to readable date
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
    <div class="w-full h-fit text-[#1B1C1E] divide-y divide-[#808080]/30 text-2xl">
      <div class="flex flex-row justify-between px-2.5 py-2">
        <button class="flex flex-row place-items-center space-x-10 hover:text-bold hover:text-[#560319] hover:underline ">
          <img class="w-7 h-7" src="/Assignment/AssignmentIcon.png" alt="" />
          <div class="text-left">
            <p>{exercise.name}</p>
            <p>{exercise.submission_count} submissions</p>
          </div>
        </button>

        <div class="flex flex-row place-items-center space-x-14">
          <p>Due date: {deadline}</p>
          <div class="flex flex-row place-items-center space-x-8">
            {/* <img class="w-4 h-4" src="/Assignment/Expand.png" alt="" /> */}
            <img class="w-4 h-4" src="/Assignment/More.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
