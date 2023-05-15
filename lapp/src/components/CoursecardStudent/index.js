const CoursecardStudent = ({ course }) => {
  return (
    <div class="card">
      <div class="flex flex-col bg-[#DE5D83]/50 rounded-3xl h-72 w-[300px] shadow-xl place-items-center">
        <img
          class="w-[300px] h-[154px] rounded-t-3xl rounded-b-none"
          src={course.picture || "/Coursecard_img/CourseTePic.png"}
          alt="Course"
        />

        <div class="flex flex-col container ">
          <h1 class="text-4xl font-bold truncate dark:text-[#1b1c1e] ml-4 mb-4">
            {course.name}
          </h1>

          <div class="flex flex-row text-3xl ml-4">
            <img
              class="w-5 h-5"
              src="/Coursecard_img/human.png"
              alt="Lecturer: "
            />
            <p class="text-center ml-2 dark:text-[#1b1c1e] truncate">
              {course.lecturer_name}
            </p>
          </div>

          <div class="flex flex-row text-3xl ml-4 place-items-center justify-start">
            <img
              class="w-5 h-5"
              src="/Coursecard_img/Icon.png"
              alt="Semester: "
            />
            <p class="text-left ml-2 dark:text-[#1b1c1e] truncate">
              {course.semester || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursecardStudent;
