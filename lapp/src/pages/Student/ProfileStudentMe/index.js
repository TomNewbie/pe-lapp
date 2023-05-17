import React, { useState, useEffect } from "react";
import { Footer } from "../../../components";
import { useAPI } from "../../../hooks/useAPI";
import { Errorpage, LoadingPage } from "../../common";
import { updateUserProfile } from "../../../services/user";

/** Need to fetch:
 * name: string
 * id: string
 * email: string
 */

// This component is a profile page for a student, with the ability to edit and save their major, intake, and phone number.
const ProfileStudentMe = ({ id }) => {
  const {
    data: infoData,
    pending: infoPending,
    error: infoError,
    refresh: refreshProfileData,
  } = useAPI({ path: "/api/student/:id", params: { id } });
  const [show, setShow] = useState(false);
  const [major, setMajor] = useState("");
  const [intake, setIntake] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [storeMajor, setStoreMajor] = useState("");
  const [storeIntake, setStoreIntake] = useState("");
  const [storePhoneNumber, setStorePhoneNumber] = useState("");

  useEffect(() => {
    if (infoData) {
      // Set initial values based on fetched data
      setMajor(infoData.major);
      setIntake(infoData.intake);
      setPhoneNumber(infoData.phone_number);
      setStoreMajor(infoData.major);
      setStoreIntake(infoData.intake);
      setStorePhoneNumber(infoData.phone_number);
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
    setMajor(storeMajor);
    setIntake(storeIntake);
    setPhoneNumber(storePhoneNumber);
  };

  const updateProfile = async () => {
    try {
      // Update the profile with new values
      await updateUserProfile({
        major: major,
        intake: intake,
        phone_number: phoneNumber,
      });
      console.log("Profile updated successfully");
      refreshProfileData();
    } catch (error) {
      throw error;
    }
  };
  const handleSave = async () => {
    try {
      await updateProfile();
      // Update the stored values
      setStoreMajor(major);
      setStoreIntake(intake);
      setStorePhoneNumber(phoneNumber);
      // Hide the edit mode
      setShow(false);
    } catch (error) {
      alert("Please provide valid input");
      console.error("Error updating profile", error);
    }
  };

  return (
    <div className="h-full bg-[#FFFAF0]">
      <div className="grid grid-cols-7 items-center h-full pt-10 bg-[#FFFAF0] pb-14">
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
            <p>Major:</p>
            <p>
              {show ? (
                <input
                  type="text"
                  id="major"
                  name="major"
                  className="bg-[#CC6666]/30 rounded-2xl h-10 w-96 text-[#1B1C1E] px-3 font-normal"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                ></input>
              ) : (
                <span className="mr-24 font-normal">{major}</span>
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 mb-6">
            <p>Intake:</p>
            <p>
              {show ? (
                <input
                  type="text"
                  id="intake"
                  name="intake"
                  className="bg-[#CC6666]/30 rounded-2xl h-10 w-96 text-[#1B1C1E] px-3 font-normal"
                  value={intake}
                  onChange={(e) => setIntake(e.target.value)}
                ></input>
              ) : (
                <span className="mr-24 font-normal">{intake}</span>
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
        </div>
      </div>

      {!show ? (
        <div className="flex self-start justify-center mt-6 mb-14">
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

export default ProfileStudentMe;
