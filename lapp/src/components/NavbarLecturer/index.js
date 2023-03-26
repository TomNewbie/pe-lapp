const NavbarLecturer = () => {
  return (
  <header className="bg-[#CC6666]/20">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img src="/navbar_img/Logo.png" alt ="logo"/>
        </div>
        <div className="">
          <ul className="flex items-center gap-[3vw]">
            <li>
              <a className="hover:text-red-400" href="#" >Home</a>
            </li>
            <li>
              <a className="hover:text-red-400" href="#" >Courses</a>
            </li>
            <li>
              <a className="hover:text-red-400" href="#" >Lecturers</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="search_box">
          <input className="border-2 border-black" placeholder="Search"></input>
          </div>
        </div>
        <div>
          <div className ="text-[45]">Hi Lecturer A,</div>
        </div>
        <div>
          <img src="/navbar_img/profile_pic.png" alt ="profile_pic"/>
        </div>
        <div>
          <button className="bg-[#6E5F56] px-5 py-2 rounded-full hover:bg-[#F0EAE0]">Log out</button>
        </div>
      </nav>
  </header>
  );
};
export default NavbarLecturer;
