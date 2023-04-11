import React, { useEffect, useState } from "react";
const NavbarCourse = ({tab1,tab2,tab3}) => {
  const [activeTab, setActiveTab] = useState(1);
  const handleClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="grid h-8 max-w-full justify-items-center mt-52">
      {/* Tab link */}
      <div className="flex justify-between w-2/3 h-8 border-b border-slate-300 cursor-pointer">
        <div
          className={
            activeTab === 1
              ? "ml-8  border-[#E36255] w-20 h-8 border-b-2 text-[#E36255]"
              : "ml-8  border-[#E36255] w-20 h-8 text-black"
          }
        >
          <p
            className="ml-3 text-2xl hover:text-[#E36255]"
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
              ? "mr-5  border-[#E36255] w-20 h-8 border-b-2 text-[#E36255]"
              : "mr-5  border-[#E36255] w-20 h-8 text-black"
          }
          onClick={() => {
            handleClick(2);
          }}
        >
          <p className="text-2xl hover:text-[#E36255]">Participants</p>
        </div>

        <div
          className={
            activeTab === 3
              ? "mr-8  border-[#E36255] w-20 h-8 border-b-2 text-[#E36255]"
              : "mr-8  border-[#E36255] w-20 h-8 text-black"
          }
          onClick={() => {
            handleClick(3);
          }}
        >
          <p className="ml-3 text-2xl hover:text-[#E36255]">Exercise</p>
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
    </div>
  );
};

export default NavbarCourse;
