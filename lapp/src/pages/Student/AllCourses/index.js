import {
  NavbarStudent,
  Footer,
  SearchBox,
  CoursecardStudent,
} from "../../../components";
const AllCoursesStudent = () => {
  return (
    <div>
      <NavbarStudent></NavbarStudent>
      <div className="flex flex-row justify-between mt-8 ml-16 mr-16">
        <SearchBox variant={"small"}></SearchBox>
        <button className="border-[#B02B3B] border-4 box-border px-2 h-9 pb-8 leading-9 rounded-xl hover:border-slate-500 text-dongle text-3xl ml-4 bg-[#ffffff] drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] text-[#1B1C1E]">
          Enter class code
        </button>
      </div>

      <div className="mt-8 ml-16 text-7xl">ALL COURSES</div>
      <div className="bg-[#F48F98]/50 grid grid-cols-4 grid-rows-2 mb-16 gap-x-32 gap-y-8 mx-16 rounded-2xl px-24 py-4">
        <CoursecardStudent></CoursecardStudent>
        <CoursecardStudent></CoursecardStudent>
        <CoursecardStudent></CoursecardStudent>
        <CoursecardStudent></CoursecardStudent>
        <CoursecardStudent></CoursecardStudent>
        <CoursecardStudent></CoursecardStudent>
        <CoursecardStudent></CoursecardStudent>
        <CoursecardStudent></CoursecardStudent>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllCoursesStudent;
