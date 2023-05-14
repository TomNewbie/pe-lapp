import { useParams } from "react-router-dom";
import { Footer } from "../../../components";
import { useAPI } from "../../../hooks/useAPI";
import Errorpage from "../Errorpage";
import LoadingPage from "../LoadingPage";

const ProfileStudent = () => {
  const { id } = useParams();
  const {
    data: user,
    pending,
    error,
  } = useAPI({
    path: "/api/student/:id",
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
      <div className="flex flex-col items-center h-screen pt-14 bg-[#FFFAF0]">
        <img
          src={user.avatar || "/ProfileTeacher/avatar.png"}
          alt="avatar"
          className="overflow-hidden rounded-full w-44 h-44"
        />
        <div className="ml-32 font-dongle mt-8 font-bold not-italic text-[45px] text-[#1B1C1E]">
          <div className="grid grid-cols-2">
            <p>Full name:</p>
            <p className="mr-24 font-normal">{user.name}</p>
          </div>

          <div className="grid grid-cols-2">
            <p>ID:</p>
            <p className="mr-24 font-normal">{user._id}</p>
          </div>

          <div className="grid grid-cols-2">
            <p>Email:</p>
            <p className="mr-24 font-normal">{user.email}</p>
          </div>

          <div className="grid grid-cols-2">
            <p>Major:</p>
            <p className="mr-24 font-normal">{user.major}</p>
          </div>
          <div className="grid grid-cols-2">
            <p>Intake:</p>
            <p className="mr-24 font-normal">{user.intake}</p>
          </div>

          <div className="grid grid-cols-2">
            <p>Phone number:</p>
            <p className="mr-24 font-normal">{user.phoneNumber}</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProfileStudent;
