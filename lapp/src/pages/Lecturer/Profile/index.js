import { NavbarLecturer, Footer } from "../../../components";
const ProfileTeacher = ({ courses, name, email, faculty, phoneNumber }) => {
  return (
    <div>
      <NavbarLecturer></NavbarLecturer>
      <div class="mt-24 ml-44 flex flex-row items-center space-x-40">
        <img src="/ProfileTeacher/avatar.png" alt="avatar" loading="lazy" />
        <div>
          <div class="flex flex-row">
            <div class="w-1/3 font-dongle font-bold not-italic text-[45px] text-[#1B1C1E]">
              <p>Full name:</p>
              <p>Email:</p>
              <p>Phone number:</p>
              <p>Faculty:</p>
            </div>
            <div class="w-3/4 font-dongle font-bold not-italic text-[45px] text-[#1B1C1E]">
              <p>{name}</p>
              <p>{email}</p>
              <p>{phoneNumber}</p>
              <p>{faculty}</p>
            </div>
          </div>
          <div class="flex flex-col">
            <div>
              <div class="border-b-4 border-solid border-[#000000]">
                <p class="font-dongle font-bold not-italic text-[45px] text-[#1B1C1E]">
                  All courses:
                </p>
              </div>
            </div>
            <div class="divide-y divide-solid divide-[#000000] w-[50rem]">
              {courses.map((course) => (
                <div>
                  <div class="flex flex-row justify-between font-dongle font-normal not-italic text-[35px] text-[#1B1C1E]">
                    <p>{course.name}</p>
                    <p>{course.semester}</p>
                  </div>
                  <div class="border-b border-solid border-[#000000]"></div>
                  {/* new line */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default ProfileTeacher;

{
  /* <ProfileTeacher
courses={courses}
name={"Quan"}
email={"n4ifmnifm44m@gmail.com"}
faculty={"Computer Science"}
></ProfileTeacher> */
}
// const courses = [
//   { name: "Programming Exercise", semester: "SS2023" },
//   { name: "Programming Exercise", semester: "SS2024" },
//   { name: "Programming Exercise", semester: "SS2025" },
// ];
