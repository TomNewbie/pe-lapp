const CommentSection = ({ grade, comment }) => {
  return (
    <div>
      <div class="flex flex-col items-center justify-center border border-solid border-[#000000] rounded-[20px] box-border font-dongle font-bold not-italic text-[37.5px] bg-[#FFFFFF] w-[38rem] h-40 ml-40">
        <p class="text-[#560319]">Grade: {grade}</p>
        <div class="flex flex-row items-center space-x-5">
          <img
            src="/CommentSection/comment.png"
            alt="comment-image"
            loading="lazy"
          />
          <p class="text-[#1B1C1E]">{comment}</p>
        </div>
      </div>
    </div>
  );
};
export default CommentSection;
