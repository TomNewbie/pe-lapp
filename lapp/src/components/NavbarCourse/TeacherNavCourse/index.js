import React, { useState } from "react";
const TeacherNavCourse = ({ tab1, tab2, tab3, tab4 }) => {
  const [activeTab, setActiveTab] = useState(1);
  const handleClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="grid h-full max-w-full justify-items-center">
      {/* Tab link */}
      <div className="flex justify-between w-3/4 h-8 text-4xl border-b cursor-pointer border-slate-300">
        <div
          className={
            activeTab === 1
              ? "ml-8  border-[#E36255] w-20 h-8 border-b-2 text-[#E36255] text-center"
              : "ml-8  border-[#E36255] w-20 h-8 text-black text-center"
          }
        >
          <p
            className=" hover:text-[#E36255]"
            onClick={() => {
              handleClick(1);
            }}
          >
            General
          </p>
        </div>

        <div
          className={
            activeTab === 2
              ? "border-[#E36255] w-20 h-8 border-b-2 text-[#E36255] text-center"
              : "border-[#E36255] w-20 h-8 text-black text-center"
          }
          onClick={() => {
            handleClick(2);
          }}
        >
          <p className=" hover:text-[#E36255]">Exercise</p>
        </div>

        <div
          className={
            activeTab === 3
              ? "border-[#E36255] w-28 h-8 border-b-2 text-[#E36255] text-center"
              : "border-[#E36255] w-28 h-8 text-black text-center"
          }
          onClick={() => {
            handleClick(3);
          }}
        >
          <p className=" hover:text-[#E36255]">Participants</p>
        </div>

        <div
          className={
            activeTab === 4
              ? "mr-20  border-[#E36255] w-20 h-8 border-b-2 text-[#E36255] text-center"
              : "mr-20  border-[#E36255] w-20 h-8 text-black text-center"
          }
          onClick={() => {
            handleClick(4);
          }}
        >
          <p className=" hover:text-[#E36255]">Grade</p>
        </div>
      </div>

      {/* Tab content */}
      <div key={1} className={activeTab === 1 ? "active" : "tabcontent"}>
        {tab1}
      </div>
      <div key={2} className={activeTab === 2 ? "active" : "tabcontent"}>
        {tab2}
      </div>
      <div key={3} className={activeTab === 3 ? "active" : "tabcontent"}>
        {tab3}
      </div>
      <div key={4} className={activeTab === 4 ? "active" : "tabcontent"}>
        {tab4}
      </div>
    </div>
  );
};

export default TeacherNavCourse;
