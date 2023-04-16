// import React, { useState } from "react";
// import { NavbarStudent, Footer } from "../../../components";

// const Profile = ({ name, id, email }) => {
//   const [show, setShow] = useState(false);
//   const [major, setMajor] = useState("CS");
//   const [intake, setIntake] = useState("2020");
//   const [phoneNumber, setPhoneNumber] = useState("113");
//   const [storeMajor, setStoreMajor] = useState("CS");
//   const [storeIntake, setStoreIntake] = useState("2020");
//   const [storePhoneNumber, setStorePhoneNumber] = useState("113");

//   const handleCancel = () => {
//     setShow(false);
//     setMajor(storeMajor);
//     setIntake(storeIntake);
//     setPhoneNumber(storePhoneNumber);
//   };

//   return (
//     <div>
//       <NavbarStudent></NavbarStudent>
//       <div className="flex flex-row mr-72">
//         {/* First column */}
//         <div className="flex flex-col items-center justify-center w-2/5  ml-20 space-y-8">
//           <div>
//             <img src="avatar.png" alt="profile picture" loading="lazy"></img>
//           </div>

//           {!show ? (
//             <div>
//               <button
//                 onClick={() => setShow(true)}
//                 className="bg-[#CC6666] opacity-80 px-10 rounded-xl border hover:border-slate-500 text-3xl text-[#1B1C1E] font-dongle"
//               >
//                 Edit
//               </button>
//             </div>
//           ) : (
//             <div
//               className="flex justify-center items-center"
//               class="ml-3 space-x-10"
//             >
//               <button
//                 className="bg-[#CC6666] opacity-80 px-10 rounded-xl text-3xl text-[#1B1C1E] border hover:border-slate-500 font-dongle"
//                 onClick={() => {
//                   setShow(false);
//                   setStoreMajor(major);
//                   setStoreIntake(intake);
//                   setStorePhoneNumber(phoneNumber);
//                 }}
//               >
//                 Save
//               </button>
//               <button
//                 className="border-[#B02B3B] border-4 inline-block box-border w-28 h-9 pb-8 rounded-xl hover:border-slate-500 text-3xl ml-4 bg-[#ffffff] drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] text-[#1B1C1E]"
//                 onClick={handleCancel}
//               >
//                 Cancel
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Second column */}
//         <div className="w-3/12 text-5xl text-[#1B1C1E] font-semibold ml-28 space-y-6 mt-32">
//           <p>Full name:</p>
//           <p>ID:</p>
//           <p>Major:</p>
//           <p>Intake:</p>
//           <p>Email:</p>
//           <p>Phone number:</p>
//         </div>

//         {/* Third column */}
//         <div className="w-1/12 text-5xl font-semibold mr-48 space-y-6 mt-32">
//           <p>{name}</p>
//           <p>{id}</p>
//           <p>
//             {show ? (
//               <input
//                 type="text"
//                 id="major"
//                 name="major"
//                 className="bg-[#9F5F5F]/30 rounded-2xl h-10 w-96 text-[#1B1C1E] px-3"
//                 value={major}
//                 onChange={(e) => setMajor(e.target.value)}
//               ></input>
//             ) : (
//               storeMajor
//             )}
//           </p>
//           <p>
//             {show ? (
//               <input
//                 type="text"
//                 id="intake"
//                 name="intake"
//                 className="bg-[#CC6666]/30 rounded-2xl h-10 w-96 text-[#1B1C1E] px-3"
//                 value={intake}
//                 onChange={(e) => setIntake(e.target.value)}
//               ></input>
//             ) : (
//               storeIntake
//             )}
//           </p>

//           <p>{email}</p>

//           <p>
//             {show ? (
//               <input
//                 type="text"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 className="bg-[#9F5F5F]/30 rounded-2xl h-10 w-96 text-[#1B1C1E] px-3"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               ></input>
//             ) : (
//               storePhoneNumber
//             )}
//           </p>
//         </div>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from "react";
import { NavbarStudent, Footer } from "../../../components";

const Profile = ({ name, id, email }) => {
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
    <div className="overflow-hidden h-screen">
      <NavbarStudent></NavbarStudent>
      <div className="flex flex-row items-center justify-center">
        {/* First column */}
        <div className="grid grid-rows-2 mt-4 ml-10">
          <div className="mt-20">
            <img src="avatar.png" alt="profile picture" loading="lazy"></img>
          </div>
          {!show ? (
            <div className="self-start flex justify-center">
              <button
                onClick={() => setShow(true)}
                className="bg-[#CC6666] opacity-80 px-10 rounded-xl border hover:border-slate-500 mt-8 text-3xl text-[#1B1C1E] font-dongle"
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center ml-3 space-x-10 mt-8 self-start">
              <button
                className="bg-[#CC6666] opacity-80 px-10 rounded-xl text-3xl text-[#1B1C1E] border hover:border-slate-500 font-dongle"
                onClick={() => {
                  setShow(false);
                  // if (major !== "") {
                  //   setStoreMajor(major);
                  // } else {
                  //   setStoreMajor(storeMajor);
                  // }
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
