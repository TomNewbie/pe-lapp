const NavbarCourse = () => {
    return (
        <div className="relative grid justify-items-center max-w-full h-8 mt-52">
            <ul className="absolute flex justify-between border-b border-black w-2/3 h-8">
                <div className="ml-8 border-b-2 border-[#E36255] w-20 h-8">
                    <li><a href="#" className="ml-3 text-[#E36255] text-2xl">General</a></li>
                </div>
                <div className="w-20 h-8 mr-5">
                    <li><a href="#" className="ml-3 text-black text-2xl hover:text-[#E36255]">Participants</a></li>
                </div>
                <div className="mr-8 w-20 h-8">
                    <li><a href="#" className="ml-3 text-black text-2xl hover:text-[#E36255]">Exercise</a></li>
                </div>
            </ul>
        </div>
    );
  };
  
  export default NavbarCourse;
  
