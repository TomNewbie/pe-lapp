const CoursecardStudent = ({ courseName, lecturerName, progress }) => {
  return (
    <div class="card">
      <div class="max-w-sm bg-[#DE5D83]/50 rounded-3xl h-67 w-44 shadow-xl">
        <img
          class="w-fit h-2/3"
          src="/Coursecard_img/CourseStuPic.png"
          alt="Course Picture"
        />

        <div class="container content-around">
          <h1 class="text-center text-2xl font-bold tracking-tight dark:text-[#1b1c1e]">
            {courseName}
          </h1>

          <div class="flex flex-row ml-8">
            <img
              class="w-4 h-4"
              src="/Coursecard_img/human.png"
              alt="Lecturer: "
            />
            <p class="text-center ml-2 tracking-tight dark:text-[#1b1c1e]">
              {lecturerName}
            </p>
          </div>

          <div class="flex flex-row ml-8">
            <img
              class="w-4 h-4"
              src="/Coursecard_img/progress.png"
              alt="Progress: "
            />
            <p class="text-center ml-2 tracking-tight dark:text-[#1b1c1e]">
              {progress}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursecardStudent;
