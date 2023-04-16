// import React, { useState } from "react";
// import { NavbarStudent, Footer } from "../../../components";

// const Profile = ({ name, id, email }) => {
//   const [show, setShow] = useState(false);
//   const [major, setMajor] = useState("");
//   const [intake, setIntake] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const handleCancel = () => {
//     setShow(false);
//     setMajor("");
//     setIntake("");
//     setPhoneNumber("");
//   };

//   return (
//     <div>
//       <NavbarStudent></NavbarStudent>
//       <div className="flex flex-row mr-72">
//         {/* First column */}
//         <div className="flex flex-col items-center justify-center w-2/5 mt-40 ml-20">
//           <img src="avatar.png" alt="profile picture" loading="lazy"></img>
//           {!show ? (
//             <button
//               onClick={() => setShow(true)}
//               className="bg-[#CC6666] opacity-80 w-28 h-9 leading-10 rounded-xl border hover:border-slate-500 mt-8 text-3xl text-[#1B1C1E]"
//             >
//               Edit
//             </button>
//           ) : (
//             <div className="flex justify-center" class="ml-3 space-x-10">
//               <button
//                 className="bg-[#CC6666] opacity-80 w-28 h-9 leading-10 rounded-xl mt-8 text-3xl text-[#1B1C1E] border hover:border-slate-500"
//                 onClick={() => setShow(false)}
//               >
//                 Save
//               </button>
//               <button
//                 className="border-[#B02B3B] border-4 box-border w-28 h-9 pb-8 leading-9 rounded-xl hover:border-slate-500 mt-8 text-3xl ml-4 bg-[#ffffff] drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] text-[#1B1C1E]"
//                 onClick={handleCancel}
//               >
//                 Cancel
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Second column */}
//         <div className="w-2/5 text-5xl text-[#1B1C1E] font-semibold mt-[200px] ml-28 space-y-6">
//           <p>Full name:</p>
//           <p>ID:</p>
//           <p>Major:</p>
//           <p>Intake:</p>
//           <p>Email:</p>
//           <p>Phone number:</p>
//         </div>

//         {/* Third column */}
//         <div className="w-1/5 text-5xl font-semibold mt-[200px] mr-48 space-y-6">
//           <p>{name}</p>
//           <p>{id}</p>
//           <p>
//             {show ? (
//               <input
//                 type="text"
//                 id="major"
//                 name="major"
//                 className="bg-[#9F5F5F]/30 rounded-2xl h-10 w-96 text-[#1B1C1E]"
//                 value={major}
//                 onChange={(e) => setMajor(e.target.value)}
//               ></input>
//             ) : (
//               major
//             )}
//           </p>
//           <p>
//             {show ? (
//               <input
//                 type="text"
//                 id="intake"
//                 name="intake"
//                 className="bg-[#CC6666]/30 rounded-2xl h-10 w-96 text-[#1B1C1E]"
//                 value={intake}
//                 onChange={(e) => setIntake(e.target.value)}
//               ></input>
//             ) : (
//               intake
//             )}
//           </p>

//           <p>{email}</p>

//           <p>
//             {show ? (
//               <input
//                 type="text"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 className="bg-[#9F5F5F]/30 rounded-2xl h-10 w-96 text-[#1B1C1E]"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               ></input>
//             ) : (
//               phoneNumber
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

const Profile = () => {
  const [show, setShow] = useState(false);
  const [program, setProgram] = useState("");
  const [id, setId] = useState("");
  const name = "Quan";

  const email = "asdawd@ssteunsd.wdcom";
  const handleCancel = () => {
    setShow(false);
    setProgram("");
    setId("");
  };

  return (
    <div>
      <NavbarStudent></NavbarStudent>
      <div className="flex flex-row">
        {/* First column */}
        <div className="flex flex-col items-center justify-center mt-40 ml-10">
          <img src="avatar.png" alt="profile picture" loading="lazy"></img>
          {!show ? (
            <button
              onClick={() => setShow(true)}
              className="bg-[#CC6666] opacity-80 w-28 h-9 leading-10 rounded-xl border hover:border-slate-500 mt-8 text-3xl text-[#1B1C1E]"
            >
              Edit
            </button>
          ) : (
            <div className="flex justify-center" class="ml-3 space-x-10">
              <button
                className="bg-[#CC6666] opacity-80 w-28 h-9 leading-10 rounded-xl mt-8 text-3xl text-[#1B1C1E] border hover:border-slate-500"
                onClick={() => setShow(false)}
              >
                Save
              </button>
              <button
                className="border-[#B02B3B] border-4 box-border w-28 h-9 pb-8 leading-9 rounded-xl hover:border-slate-500 mt-8 text-3xl ml-4 bg-[#ffffff] drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] text-[#1B1C1E]"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <table class="table-auto text-5xl text-[#1B1C1E] font-semibold space-x-96">
          <tbody>
            <tr>
              <th class="pr-28">Full name:</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th>ID:</th>
              <td>
                <p>
                  {show ? (
                    <input
                      type="text"
                      id="id"
                      name="id"
                      className="bg-[#CC6666]/30 rounded-2xl h-10 w-96 text-[#1B1C1E] px-3"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                    ></input>
                  ) : (
                    id
                  )}
                </p>
              </td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{email}</td>
            </tr>
            <tr>
              <th>Program: </th>
              <td>
                <p>
                  {show ? (
                    <input
                      type="text"
                      id="Program"
                      name="Program"
                      className="bg-[#CC6666]/30 rounded-2xl h-10 w-96 text-[#1B1C1E] px-3"
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                    ></input>
                  ) : (
                    program
                  )}
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        {/* <div class="flex flex-col text-5xl text-[#1B1C1E] font-semibold">
          <div class="flex flex-row space-x-20">
            <p>Full name:</p>
            <p>{name}</p>
          </div>
          <div class="flex flex-row space-x-48">
            <p>Id: </p>
            <p>
              {show ? (
                <input
                  type="text"
                  id="id"
                  name="id"
                  className="bg-[#CC6666]/30 rounded-2xl h-10 w-96 text-[#1B1C1E] px-3"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                ></input>
              ) : (
                id
              )}
            </p>
          </div>
          <div class="flex flex-row space-x-36">
            <p>Email:</p>
            <p>{email}</p>
          </div>
          <div class="flex flex-row space-x-24">
            <p>Program:</p>
            <p>
              {show ? (
                <input
                  type="text"
                  id="Program"
                  name="Program"
                  className="bg-[#CC6666]/30 rounded-2xl h-10 w-96 text-[#1B1C1E] px-3"
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                ></input>
              ) : (
                program
              )}
            </p>
          </div>
        </div> */}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Profile;
