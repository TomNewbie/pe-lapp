import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
const NavbarLecturer = () => {
  const auth = useAuth();
  const id = auth.user?._id;
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
        <div className="absolute ml-96">
          <ul className="flex flex-row items-center mt-1 space-x-72">
            <li className="text-[42px] hover:text-[#B02B3B]">
              <Link to="/allcourses">Courses</Link>
            </li>
          </ul>
        </div>
        <div className="absolute mt-1 right-56">
          <div className="text-[42px]">Hi Teacher {id},</div>
        </div>
        <div className="absolute right-44 top-6">
          <Link to="/profile">
            <img src="/navbar_img/profile_pic.png" alt="profile_pic" />
          </Link>
        </div>
        <div className="absolute right-0 mr-8 top-3">
          <button
            className="p-8 h-12 text-white text-center text-3xl bg-[#B02B3B]/70 border border-[#560319] px-4 py-2 rounded-xl hover:bg-[#CC6666]/40"
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
export default NavbarLecturer;
