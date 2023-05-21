import React, { useState, useEffect } from "react";
const StudentNavCourse = ({ tab1, tab2, tab3 }) => {
  const [activeTab, setActiveTab] = useState(1);
  const handleClick = (index) => {
    setActiveTab(index);
    sessionStorage.setItem("activeTab", index.toString());
  };

  useEffect(() => {
    // Retrieve the active tab index from local storage
    const storedActiveTab = sessionStorage.getItem("activeTab");
    if (storedActiveTab) {
      setActiveTab(parseInt(storedActiveTab));
    }

    // Clear the stored active tab index when navigating away from the page
    return () => {
      sessionStorage.removeItem("activeTab");
    };
  }, []);

  return (
    <div className="grid h-full justify-items-center">
      {/* Tab link */}
      <div className="flex justify-between w-3/4 h-8 text-4xl border-b cursor-pointer border-slate-300">
        <div
          className={
            activeTab === 1
              ? "ml-8  border-[#E36255] w-24 h-8 border-b-2 text-[#E36255]"
              : "ml-8  border-[#E36255] w-20 h-8 text-black"
          }
        >
          <p
            className="ml-3  hover:text-[#E36255]"
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
              ? "mr-5  border-[#E36255] w-32 h-8 border-b-2 text-[#E36255]"
              : "mr-5  border-[#E36255] w-20 h-8 text-black"
          }
          onClick={() => {
            handleClick(2);
          }}
        >
          <p className=" hover:text-[#E36255]">Participants</p>
        </div>

        <div
          className={
            activeTab === 3
              ? "mr-8  border-[#E36255] w-28 h-8 border-b-2 text-[#E36255]"
              : "mr-8  border-[#E36255] w-20 h-8 text-black"
          }
          onClick={() => {
            handleClick(3);
          }}
        >
          <p className="ml-3 hover:text-[#E36255]">Exercise</p>
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

export default StudentNavCourse;
