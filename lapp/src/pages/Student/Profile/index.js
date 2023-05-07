import React, { useState } from "react";
import { NavbarStudent, Footer } from "../../../components";

/** Need to fetch:
 * name: string
 * id: string
 * email: string
 */
const name = "Le Hoang Kim Thanh";
const id = 18047;
const email = "18047@student.vgu.edu.vn";

// This component is a profile page for a student, with the ability to edit and save their major, intake, and phone number.
const Profile = () => {
  const [show, setShow] = useState(false);
  const [major, setMajor] = useState("");
  const [intake, setIntake] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [storeMajor, setStoreMajor] = useState("");
  const [storeIntake, setStoreIntake] = useState("");
  const [storePhoneNumber, setStorePhoneNumber] = useState("");

  const handleCancel = () => {
    setShow(false);
    setMajor(storeMajor);
    setIntake(storeIntake);
    setPhoneNumber(storePhoneNumber);
  };

  return (
    <div className="h-screen overflow-hidden">
      <NavbarStudent></NavbarStudent>
      <div className="flex flex-row items-center justify-center">
        {/* First column */}
        <div className="grid grid-rows-2 mt-4 ml-10">
          <div className="mt-20">
            <img src="avatar.png" alt="profile" loading="lazy"></img>
          </div>
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
            <div className="flex items-center self-start justify-center mt-8 ml-3 space-x-10">
              <button
                className="bg-[#CC6666] opacity-80 px-10 rounded-xl text-3xl text-[#1B1C1E] border hover:border-slate-500 font-dongle"
                onClick={() => {
                  setShow(false);
                  setStoreMajor(major);
                  setStoreIntake(intake);
                  setStorePhoneNumber(phoneNumber);
                }}
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
        </div>

        {/* Second column */}
        <div className="w-1/6 text-5xl text-[#1B1C1E] font-semibold ml-36 space-y-6 mb-32 grid grid-rows-6">
          <div className="flex items-end">
            <p>Full name:</p>
          </div>
          <p>ID:</p>
          <p>Email:</p>
          <p>Major:</p>
          <p>Intake:</p>
          <p>Phone number:</p>
        </div>

        {/* Third column */}
        <div className="w-2/12 text-5xl text-[#1B1C1E] font-semibold mr-48 space-y-6 mb-32 grid grid-rows-6">
          <div className="flex items-end">
            <p>{name}</p>
          </div>
          <p>{id}</p>
          <p>{email}</p>
          <p>
            {show ? (
              <input
                type="text"
                id="major"
                name="major"
                className="bg-[#CC6666]/30 rounded-2xl h-10 w-96 text-[#1B1C1E] px-3"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
              ></input>
            ) : (
              <span>{storeMajor}</span>
            )}
          </p>
          <p>
            {show ? (
              <input
                type="text"
                id="intake"
                name="intake"
                className="bg-[#CC6666]/30 rounded-2xl h-10 w-96 text-[#1B1C1E] px-3"
                value={intake}
                onChange={(e) => setIntake(e.target.value)}
              ></input>
            ) : (
              storeIntake
            )}
          </p>

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
              storePhoneNumber
            )}
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
