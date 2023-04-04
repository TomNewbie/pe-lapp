import React, { useState } from "react";

const Profile = () => {
  const [show, setShow] = useState(false);
  const [program, setProgram] = useState("");
  const name = "Quan";
  const id = 12345;
  const email = "asdawd@ssteunsd.wdcom";
  const handleCancel = () => {
    setShow(false);
    setProgram("");
  };

  return (
    <div className="flex flex-row mr-72">
      {/* First column */}
      <div className="flex flex-col items-center justify-center w-2/5 mt-40 ml-20">
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

      {/* Second column */}
      <div className="w-1/5 text-5xl text-[#1B1C1E] font-semibold mt-[200px] ml-28 space-y-6">
        <p>Full name:</p>
        <p>ID:</p>
        <p>Email:</p>
        <p>Program: </p>
      </div>

      {/* Third column */}
      <div className="w-1/5 text-5xl font-semibold mt-[200px] mr-48 space-y-6">
        <p>{name}</p>
        <p>{id}</p>
        <p>{email}</p>
        <p>
          {show ? (
            <input
              type="text"
              id="Program"
              name="Program"
              className="bg-[#CC6666]/30 rounded-2xl h-10 w-96 text-[#1B1C1E]"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
            ></input>
          ) : (
            program
          )}
        </p>
      </div>
    </div>
  );
};

export default Profile;
