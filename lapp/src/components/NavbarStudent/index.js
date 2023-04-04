import SearchBox from "../SearchBox";

const NavbarStudent = () => {
  return (
    <header className="bg-[#CC6666]/20">
      <nav className="relative flex items-center h-20 max-w-full">
        <div className="ml-8">
          <img src="/navbar_img/Logo.png" alt="logo" width={50} height={50} />
        </div>
        <div className="absolute ml-72">
          <ul className="flex items-center grid-cols-2 gap-x-16">
            <li>
              <a className="text-4xl text-dongle hover:text-white" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-4xl text-dongle hover:text-white" href="#">
                Courses
              </a>
            </li>
            <li>
              <a className="text-4xl text-dongle hover:text-white" href="#">
                Lecturers
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute mr-40 right-36">
          <div className="search_box">
            <SearchBox variant={"big"} />
          </div>
        </div>
        <div className="absolute right-44">
          <div className="text-2xl text">Hi Student ID,</div>
        </div>
        <div className="absolute right-32">
          <img src="/navbar_img/profile_pic.png" alt="profile_pic" />
        </div>
        <div className="absolute right-0 mr-8">
          <button className="text-white text-xl bg-[#B02B3B] px-5 py-2 rounded-full hover:bg-[#F0EAE0]">
            Log out
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavbarStudent;
