const PostAnnEx = () => {
  return (
    <div class="flex flex-col justify-between space-y-2 px-5 py-2 w-60  bg-[#F0EAE0] text-[#1B1C1E] rounded-xl shadow-xl place-items-center text_2xl">
      <input
        type="text"
        placeholder="Enter title here"
        class="bg-[#9F5F5F]/30 rounded-xl px-3 w-full"></input>
      <input
        type="text"
        placeholder="Enter title here"
        class="bg-[#9F5F5F]/30 rounded-xl px-3 w-full"></input>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full border-[#560319] border-2 rounded-xl"
        placeholder="Announce something..."></textarea>
      <img class="w-6 h-6" src="/PostAnnEx/Upload.png" alt="" />
      <div class=" flex flex-row justify-between w-full">
        <button class="bg-[#CC6666] w-20 rounded-xl">Post</button>
        <button class="border-[#B02B3B] border-4 rounded-xl w-20">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PostAnnEx;
