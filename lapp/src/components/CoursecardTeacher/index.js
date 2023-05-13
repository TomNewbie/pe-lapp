const CoursecardTeacher = ({ course }) => {
  return (
    <div class="card">
      <div class="max-w-sm bg-[#EC9A86]/80 rounded-3xl h-67 w-44 shadow-xl ">
        <img
          class="w-fit h-2/3"
          src={course.picture || "/Coursecard_img/CourseTePic.png"}
          alt="Course"
        />

        <div class="container content-around">
          <h1 class="text-center text-2xl font-bold tracking-tight dark:text-[#1b1c1e]">
            {course.name}
          </h1>

          <div class="flex flex-row ml-8">
            <img
              class="w-4 h-4"
              src="/Coursecard_img/human.png"
              alt="Participants: "
            />
            <p class="text-center ml-2 tracking-tight dark:text-[#1b1c1e]">
              {course.participant_count}
            </p>
          </div>

          <div class="flex flex-row ml-8">
            <img
              class="w-5 h-5"
              src="/Coursecard_img/Icon.png"
              alt="Semester:: "
            />
            <p class="text-center ml-2 tracking-tight dark:text-[#1b1c1e]">
              {course.semester || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursecardTeacher;
