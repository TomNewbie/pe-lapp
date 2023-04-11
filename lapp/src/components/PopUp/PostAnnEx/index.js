import CustomButton from "../../CustomButton";
const PostAnnEx = () => {
  return (
    <div class="flex flex-col justify-between space-y-2 px-5 py-2 w-60  bg-[#FFFCF7] text-[#1B1C1E] rounded-xl shadow-xl place-items-center text_2xl">
      <input
        type="text"
        placeholder="Enter title here"
        class="bg-[#9F5F5F]/30 rounded-xl px-3 w-full"></input>
      <input
        type="text"
        placeholder="Enter due date here"
        class="bg-[#9F5F5F]/30 rounded-xl px-3 w-full"></input>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full border-[#560319] border-2 rounded-xl"
        placeholder="Announce something..."></textarea>

      <img
        class="w-6 h-6 hover:bg-[#9F5F5F]/30 rounded-full"
        src="/PostAnnEx/Upload.png"
        alt=""
      />

      <div class=" flex flex-row justify-between w-full text-xl ">
        {/* <button class="bg-[#CC6666] w-20 rounded-xl hover:bg-[#9E4244] text-[#F1E0CE] text-center">
          Post
        </button>
        <button class="border-[#B02B3B] border-4 rounded-xl w-20 hover:bg-[#B02B3B] hover:text-[#F1E0CE] text-center ">
          Cancel
        </button> */}
        <CustomButton variant={"filled"} text={"Post"} className={"px-5 pt-1 pb-0.75"}></CustomButton>
        <CustomButton variant={"border"} text={"Cancel"} className={"px-2 pt-0.5 pb-0.25"}></CustomButton>

      </div>
    </div>
  );
};

export default PostAnnEx;
