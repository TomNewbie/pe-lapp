import { NavbarLecturer, Footer } from "../../../components";
const ProfileTeacher = ({ courseName, semester }) => {
  return (
    <div>
      <NavbarLecturer></NavbarLecturer>
      <div class="mt-24 ml-44 flex flex-row items-center space-x-40">
        <img src="/ProfileTeacher/avatar.png" alt="avatar" loading="lazy" />
        <div>
          <div class="font-dongle font-bold not-italic text-[45px] text-[#1B1C1E]">
            <p>Full name:</p>
            <p>Email:</p>
            <p>Faculty:</p>
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
              <div class="flex flex-row justify-between font-dongle font-normal not-italic text-[35px] text-[#1B1C1E]">
                <p>{courseName}</p>
                <p>{semester}</p>
              </div>
              <div class="flex flex-row justify-between font-dongle font-normal not-italic text-[35px] text-[#1B1C1E]">
                <p>{courseName}</p>
                <p>{semester}</p>
              </div>
              <div class="flex flex-row justify-between font-dongle font-normal not-italic text-[35px] text-[#1B1C1E]">
                <p>{courseName}</p>
                <p>{semester}</p>
              </div>
              <div class="border-b border-solid border-[#000000]"></div>
              {/* new line */}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default ProfileTeacher;
