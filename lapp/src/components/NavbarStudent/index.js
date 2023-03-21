const NavbarStudent = () => {
  return (
  <header className="bg-[#F0EAE0]">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img src="/navbar_img/Logo.png" alt ="logo"/>
        </div>
        <div className="">
          <ul class="flex items-center gap-[3vw]">
            <li>
              <a class="hover:text-red-400" href="#" >Home</a>
            </li>
            <li>
              <a class="hover:text-red-400" href="#" >Cource</a>
            </li>
            <li>
              <a class="hover:text-red-400" href="#" >Lecturer</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="search_box">
          <input class="border-2 border-black" placeholder="Search"></input>
          </div>
        </div>
        <div>
          <div class ="text">Hi Student ID,</div>
        </div>
        <div>
          <img src="/navbar_img/profile_pic.png" alt ="profile_pic"/>
        </div>
        <div>
          <button class="bg-[#6E5F56] px-5 py-2 rounded-full hover:bg-[#F0EAE0]">Log out</button>
        </div>
      </nav>
  </header>
  );
};
export default NavbarStudent;
