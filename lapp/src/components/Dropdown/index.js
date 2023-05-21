import { useState } from "react";

const Dropdown = ({ onDelete, onEdit, noDelete = false }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="relative">
      <img
        src="/dropdown/more.svg"
        alt=""
        className="w-12 h-12 cursor-pointer"
        onClick={handleClick}
      />
      {active && (
        <div className="absolute z-10 -left-32">
          <div className="w-40 h-full bg-white border shadow-xl rounded-2xl">
            <div className="flex flex-col mt-3 ml-4 space-y-2">
              <div
                className="flex flex-row hover:text-[#B02B3B] cursor-pointer"
                onClick={() => {
                  onEdit();
                  setActive(false);
                }}
              >
                <img src="/dropdown/edit.png" alt="" className="w-5 h-5 mt-1" />
                <div className="ml-12 text-3xl">Edit</div>
              </div>
              {!noDelete && (
                <div
                  className="flex flex-row mt-3 hover:text-[#B02B3B] cursor-pointer"
                  onClick={() => {
                    onDelete();
                    setActive(false);
                  }}
                >
                  <img
                    src="/dropdown/delete.png"
                    alt=""
                    className="w-5 h-5 mt-1"
                  />
                  <div className="ml-12 text-3xl">Delete</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
