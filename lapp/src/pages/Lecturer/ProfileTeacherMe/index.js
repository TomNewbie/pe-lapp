import { useState, useEffect } from "react";
import { Footer } from "../../../components";
import { useAPI } from "../../../hooks/useAPI";
import { Errorpage, LoadingPage } from "../../common";
import { updateUserProfile } from "../../../services/user";
/** Need to fetch:
 * course:
 *      {name: string;semester: string;}
 * name: string
 * email: string
 * faculty: string
 * courses
 */

// This is a functional component for the profile page of a teacher.
const ProfileTeacherMe = ({ id }) => {
  const {
    data: infoData,
    pending: infoPending,
    error: infoError,
    refresh: refreshProfileData,
  } = useAPI({ path: "/api/lecturer/:id", params: { id } });
  console.log(infoData);
  const [show, setShow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [storePhoneNumber, setStorePhoneNumber] = useState("");
  const [faculty, setFaculty] = useState("");
  const [storeFaculty, setStoreFaculty] = useState("");
  useEffect(() => {
    if (infoData) {
      setPhoneNumber(infoData.phone_number);
      setStorePhoneNumber(infoData.phone_number);
      setFaculty(infoData.faculty);
      setStoreFaculty(infoData.faculty);
    }
  }, [infoData]);

  if (infoError) {
    return <Errorpage />;
  }
  if (infoPending) {
    return <LoadingPage />;
  }

  const handleCancel = () => {
    setShow(false);
    setPhoneNumber(storePhoneNumber);
  };

  const updateProfile = async () => {
    try {
      // Update the profile with new values
      await updateUserProfile({
        faculty: faculty,
        phone_number: phoneNumber,
      });
      console.log("Profile updated successfully");
      refreshProfileData();
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };
  const handleSave = async () => {
    await updateProfile();
    // Update the stored values
    setStoreFaculty(faculty);
    setStorePhoneNumber(phoneNumber);
    // Hide the edit mode
    setShow(false);
  };

  return (
    <div className="h-full bg-[#FFFAF0] min-h-screen">
      <div className="grid grid-cols-7 items-center h-full pt-10 bg-[#FFFAF0] pb-8 flex-grow">
        <div className="flex flex-row justify-center col-span-2">
          <img
            src={infoData.avatar || "/ProfileTeacher/avatar.png"}
            alt="avatar"
            className="rounded-full overflow-clip w-44 h-44"
          />
        </div>
        <div className="col-span-5 ml-32 font-dongle mt-8 font-bold not-italic text-5xl text-[#1B1C1E] flex flex-col ">
          <div className="grid grid-cols-2 mb-6">
            <p>Full name:</p>
            <p className="mr-24 font-normal">{infoData.name}</p>
          </div>

          <div className="grid grid-cols-2 mb-6">
            <p>Email:</p>
            <p className="mr-24 font-normal">{infoData.email}</p>
          </div>

          <div className="grid grid-cols-2 mb-6">
            <p>Faculty:</p>
            <p>
              {show ? (
                <input
                  type="text"
                  id="faculty"
                  name="faculty"
                  className="bg-[#CC6666]/30 rounded-2xl h-10 w-96 text-[#1B1C1E] px-3 font-normal"
                  value={faculty}
                  onChange={(e) => setFaculty(e.target.value)}
                ></input>
              ) : (
                <span className="mr-24 font-normal">{faculty}</span>
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 mb-6">
            <p>Phone number:</p>
            <p>
              {show ? (
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="bg-[#CC6666]/30 rounded-2xl h-10 w-96 text-[#1B1C1E] px-3 font-normal"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
              ) : (
                <span className="mr-24 font-normal">{phoneNumber}</span>
              )}
            </p>
          </div>

          <p className="mb-6">All courses:</p>
          <div className="divide-y divide-solid divide-[#000000] w-[40rem]">
            {infoData.courses.map((course) => (
              <div className="flex flex-row justify-between font-dongle font-normal not-italic text-4xl text-[#1B1C1E]">
                <p>{course.name}</p>
                <p>{course.semester}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {!show ? (
        <div className="flex self-start justify-center mt-6 mb-10">
          <button
            onClick={() => setShow(true)}
            className="p-4 h-12 text-white text-center text-4xl bg-[#B02B3B]/70 border border-[#560319] px-10 py-2 rounded-xl hover:bg-[#CC6666]/40"
          >
            Edit
          </button>
        </div>
      ) : (
        <div className="flex self-start justify-center mt-6 mb-10">
          <button
            className="bg-[#CC6666] opacity-80 px-10 rounded-xl text-3xl text-[#1B1C1E] border hover:border-slate-500 font-dongle"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="border-[#B02B3B] border-4 box-border w-28 h-9 pb-8 rounded-xl hover:border-slate-500 text-3xl ml-4 bg-[#ffffff] drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] text-[#1B1C1E]"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProfileTeacherMe;
