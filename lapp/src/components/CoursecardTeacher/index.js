import { Link } from "react-router-dom";
import { Dropdown } from "../../components";

const CoursecardTeacher = ({ course, handleEdit }) => {
  const id = course._id;
  const handleDelete = () => {
    console.log("Delete");
  };
  return (
    <div class="card relative">
      <Link to={`/course/${id}`}>
        <div class="flex flex-col bg-[#EC9A86]/80 rounded-3xl h-72 w-[300px] shadow-xl place-items-center">
          <img
            class="w-[300px] h-[154px] rounded-t-3xl rounded-b-none"
            src={course.picture || "/Coursecard_img/CourseTePic.png"}
            alt="Course"
          />

          <div class="flex flex-col container mt-4">
            <h1 class="text-4xl font-bold truncate dark:text-[#1b1c1e] ml-4">
              {course.name}
            </h1>

            <div class="flex flex-row text-3xl ml-4">
              <img
                class="w-5 h-5"
                src="/Coursecard_img/human.png"
                alt="Participants: "
              />
              <p class="text-center ml-2 dark:text-[#1b1c1e] truncate">
                {course.participant_count}
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
      </Link>
      <div className="absolute -right-12 top-56">
        <Dropdown onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default CoursecardTeacher;
