import SearchBox from "../SearchBox";

const NavbarStudent = () => {
  return (
  <header className="bg-[#CC6666]/20">
      <nav className="relative flex items-center">
        <div className="ml-8">
          <img src="/navbar_img/Logo.png" alt ="logo"/>
        </div>
        <div className="absolute ml-40">
          <ul className="flex items-center gap-[3vw]">
            <li>
              <a className="text-dongle hover:text-white" href="#" >Home</a>
            </li>
            <li>
              <a className="text-dongle hover:text-white" href="#" >Courses</a>
            </li>
            <li>
              <a className="text-dongle hover:text-white" href="#" >Lecturers</a>
            </li>
          </ul>
        </div>
        <div className="absolute ml-96">
          <div className="search_box">
            <SearchBox></SearchBox>
          </div>
        </div>
        <div className="absolute right-40">
          <div className ="text">Hi Student ID,</div>
        </div>
        <div className="absolute right-28">
          <img src="/navbar_img/profile_pic.png" alt ="profile_pic"/>
        </div>
        <div className="absolute right-0 mr-8">
          <button className="text-white bg-[#B02B3B] px-5 py-2 rounded-full hover:bg-[#F0EAE0]">Log out</button>
        </div>
      </nav>
  </header>
  );
};
export default NavbarStudent;
