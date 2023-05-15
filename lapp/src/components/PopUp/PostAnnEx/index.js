import CustomButton from "../../CustomButton";
const PostAnnEx = ({ type, handleClose }) => {
  return (
    <div className="absolute flex items-center justify-center w-full h-screen bg-black/60">
      <div class="flex flex-col justify-between space-y-3 px-5 py-2 w-[800px] h-fit bg-[#FFFCF7] text-[#1B1C1E] rounded-xl shadow-xl place-items-center text-3xl">
        <input
          type="text"
          placeholder="Enter title here"
          class="bg-[#9F5F5F]/30 rounded-xl px-3 w-full text-3xl"
        ></input>
        {type === "exercise" ? (
          <input
            type="text"
            placeholder="Enter due date here"
            class="bg-[#9F5F5F]/30 rounded-xl px-3 w-full text-3xl"
          ></input>
        ) : (
          <div></div>
        )}

        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full border-[#560319] border-2 rounded-xl text-3xl"
          placeholder="Announce something..."
        ></textarea>

        <input type="file"></input>

        <div class=" flex flex-row justify-center space-x-48 w-full text-xl pb-2">
          <CustomButton
            variant={"filled"}
            text={"Post"}
            className={"px-5 pt-1 pb-0.75"}
            handleButton={handleClose}
          ></CustomButton>
          <CustomButton
            variant={"border"}
            text={"Cancel"}
            className={"px-2 pt-0.5 pb-0.25"}
            handleButton={handleClose}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default PostAnnEx;
