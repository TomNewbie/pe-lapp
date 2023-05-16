import { useState } from "react";
const Dropdown = ({ onDelete, onEdit }) => {
  const [active, setActive] = useState(0);
  const handleClick = () => {
    if (active === 0) {
      setActive(1);
    } else {
      setActive(0);
    }
  };
  return (
    <div className="relative ">
      <img
        src="/dropdown/more.svg"
        alt=""
        className="w-12 h-12 cursor-pointer"
        onClick={() => handleClick()}
      ></img>
      {active === 0 ? (
        <div></div>
      ) : (
        <div className="absolute z-10 -left-32">
          <div className="w-40 h-24 bg-white border rounded-2xl">
            <div className="flex flex-col mt-3 ml-4 space-y-2">
              <div className="flex flex-row hover:text-[#B02B3B] cursor-pointer">
                <img
                  src="/dropdown/edit.png"
                  alt=""
                  className="w-5 h-5 mt-1"
                ></img>
                <div className="ml-12 text-3xl" onClick={onEdit}>
                  Edit
                </div>
              </div>
              <div className="flex flex-row mt-3 hover:text-[#B02B3B] cursor-pointer">
                <img
                  src="/dropdown/delete.png"
                  alt=""
                  className="w-5 h-5 mt-1"
                ></img>
                <div
                  className="ml-12 text-3xl"
                  onClick={() => {
                    onDelete();
                    handleClick();
                  }}
                >
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
