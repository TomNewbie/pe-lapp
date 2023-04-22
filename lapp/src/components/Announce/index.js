const Announce = () => {
  return (
    <button
      type="button"
      class="grid justify-start gap-4 w-full h-fit p-3 bg-[#FFFCF7] shadow-xl rounded-2xl "
    >
      <div class="flex flex-row place-items-center space-x-5">
        <img
          src="/Announce/comment.png"
          alt="commentsection"
          class="w-10 h-8"
        ></img>

        <p class="text-[28px] text-[#1B1C1E]/80 w-fit grid place-items-center">
          Announce something...
        </p>
      </div>
    </button>
  );
};

export default Announce;
