import { useState } from "react";
import { NavbarLecturer, Footer } from "../../../components";
/** Need to fetch:
 * course:
 *      {name: string;semester: string;}
 * name: string
 * email: string
 * faculty: string
 */
const courses = [{ name: "Programming exercise", semetes: "SS2023" }];
const name = "Huynh Trung Hieu";
const email = "htt.vgu.edu.vn";
const faculty = "CSE";

// This is a functional component for the profile page of a teacher.
const ProfileTeacherMe = () => {
  const [show, setShow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [storePhoneNumber, setStorePhoneNumber] = useState("");

  const handleCancel = () => {
    setShow(false);
    setPhoneNumber(storePhoneNumber);
  };
  return (
    <div className="h-screen overflow-y-hidden bg-[#FFFAF0]">
      <div className="flex flex-row items-center justify-center mt-6 space-x-40">
        <div className="grid items-center grid-rows-2 mt-20 ml-60">
          <img src="/ProfileTeacher/avatar.png" alt="avatar" loading="lazy" />
          {!show ? (
            <div className="flex self-start justify-center">
              <button
                onClick={() => setShow(true)}
                className="bg-[#CC6666] opacity-80 px-10 rounded-xl border hover:border-slate-500 mt-8 text-3xl text-[#1B1C1E] font-dongle"
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="flex self-start justify-center mt-8 ml-3 space-x-10">
              <button
                className="bg-[#CC6666] opacity-80 px-10 rounded-xl text-3xl text-[#1B1C1E] border hover:border-slate-500 font-dongle"
                onClick={() => {
                  setShow(false);
                  setStorePhoneNumber(phoneNumber);
                }}
              >
                Save
              </button>
              <button
                className="border-[#B02B3B] border-4 box-border w-28 h-9 pb-8 rounded-xl hover:border-slate-500 text-3xl bg-[#ffffff] drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] text-[#1B1C1E]"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-row">
            <div className="w-1/3 font-dongle font-bold not-italic text-[45px] text-[#1B1C1E] grid grid-rows-4">
              <p>Full name:</p>
              <p>Email:</p>
              <p>Faculty:</p>
              <p>Phone number:</p>
            </div>
            <div className="w-3/4 font-dongle font-bold not-italic text-[45px] text-[#1B1C1E] grid grid-rows-4">
              <p>{name}</p>
              <p>{email}</p>
              <p>{faculty}</p>
              <p>
                {show ? (
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="bg-[#CC6666]/30 rounded-2xl h-10 w-96 text-[#1B1C1E] px-3"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  ></input>
                ) : (
                  <span>{phoneNumber}</span>
                )}
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-20">
            <div>
              <div className="border-b-4 border-solid border-[#000000]">
                <p className="font-dongle font-bold not-italic text-[45px] text-[#1B1C1E]">
                  All courses
                </p>
              </div>
            </div>
            <div className="divide-y divide-solid divide-[#000000] w-[50rem]">
              {courses.map((course) => (
                <div>
                  <div className="flex flex-row justify-between font-dongle font-normal not-italic text-[35px] text-[#1B1C1E]">
                    <p>{course.name}</p>
                    <p>{course.semester}</p>
                  </div>
                  <div className="border-b border-solid border-[#000000]"></div>
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

export default ProfileTeacherMe;