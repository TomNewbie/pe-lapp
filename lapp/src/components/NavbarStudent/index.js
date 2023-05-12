import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
const NavbarStudent = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div className="bg-[#CC6666]/20">
      <nav className="relative flex items-center h-20 max-w-full">
        <div className="ml-8">
          <img src="/navbar_img/Logo.png" alt="logo" width={50} height={50} />
        </div>
        <div className="absolute ml-72">
          <ul className="flex flex-row items-center space-x-48">
            <li className="text-4xl hover:text-[#B02B3B]">
              <Link to="/allcourses">Courses</Link>
            </li>
            <li className="text-4xl hover:text-[#B02B3B]">
              <Link to="/lecturers">Lecturers</Link>
            </li>
          </ul>
        </div>
        <div className="absolute mt-1 right-48">
          <div className="text-3xl text">Hi Student ID,</div>
        </div>
        <div className="absolute right-36">
          <Link to="/profile">
            <img src="/navbar_img/profile_pic.png" alt="profile_pic" />
          </Link>
        </div>
        <div className="absolute right-0 mr-8">
          <button
            className="p-8 h-12 text-white text-center text-2xl bg-[#B02B3B]/70 border border-[#560319] px-5 py-2 rounded-full hover:bg-[#CC6666]/40"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavbarStudent;
