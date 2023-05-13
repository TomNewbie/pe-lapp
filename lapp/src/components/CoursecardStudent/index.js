const CoursecardStudent = ({ course }) => {
  return (
    <div class="card">
      <div class="max-w-sm bg-[#DE5D83]/50 rounded-3xl h-67 w-44 shadow-xl">
        <img
          class="w-fit h-2/3 rounded-3xl"
          src={course.picture || "/Coursecard_img/CourseTePic.png"}
          alt="Course"
        />

        <div class="container content-around">
          <h1 class="text-center text-2xl truncate font-bold tracking-tight dark:text-[#1b1c1e]">
            {course.name}
          </h1>

          <div class="flex flex-row ml-8">
            <img
              class="w-4 h-4"
              src="/Coursecard_img/human.png"
              alt="Lecturer: "
            />
            <p class="text-center ml-2 tracking-tight dark:text-[#1b1c1e]">
              {course.lecturer_name}
            </p>
          </div>

          <div class="flex flex-row ml-8">
            <img
              class="w-4 h-4"
              src="/Coursecard_img/progress.png"
              alt="Progress: "
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

export default CoursecardStudent;
