import { useParams } from "react-router-dom";
import { Footer } from "../../../components";
import { useAPI } from "../../../hooks/useAPI";
import Errorpage from "../Errorpage";
import LoadingPage from "../LoadingPage";

const ProfileLecturer = () => {
  const { id } = useParams();
  const {
    data: user,
    pending,
    error,
  } = useAPI({
    path: "/api/lecturer/:id",
    params: { id },
  });
  console.log(id);
  console.log(user);
  if (error) {
    return <Errorpage />;
  }
  if (pending) {
    return <LoadingPage />;
  }
  return (
    <div>
      <div className="flex flex-col items-center h-full pt-14 bg-[#FFFAF0] pb-8 ">
        <img
          src={user.avatar || "/ProfileTeacher/avatar.png"}
          alt="avatar"
          className="rounded-full overflow-clip w-44 h-44"
        />
        <div className=" ml-32 font-dongle mt-8 font-bold not-italic text-[45px] text-[#1B1C1E]">
          <div className="grid grid-cols-2">
            <p>Full name:</p>
            <p className="mr-24 font-normal">{user.name}</p>
          </div>

          <div className="grid grid-cols-2">
            <p>Email:</p>
            <p className="mr-24 font-normal">{user.email}</p>
          </div>

          <div className="grid grid-cols-2">
            <p>Faculty:</p>
            <p className="mr-24 font-normal">{user.faculty}</p>
          </div>

          <div className="grid grid-cols-2">
            <p>Phone number:</p>
            <p className="mr-24 font-normal">{user.phone_number}</p>
          </div>

          <p>All courses: </p>
          <div className="pt-2 divide-y divide-solid divide-[#000000] w-[50rem]">
            {user.courses.map((course) => (
              <div>
                <div className="flex flex-row justify-between font-dongle font-normal not-italic text-[40px] text-[#1B1C1E]">
                  <p>{course.name}</p>
                  <p>{course.semester}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProfileLecturer;
