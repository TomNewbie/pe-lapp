const CommentSection = ({ grade, comment }) => {
  return (
    <div>
      <div class="flex flex-col items-center font-bold text-[37.5px] bg-transparent w-full">
        <p class="text-[#560319]">Grade: {grade}</p>
        {/* <div class="flex flex-row items-center space-x-5">
          <img
            src="/CommentSection/comment.png"
            alt="comment-image"
            loading="lazy"
          />
          <p class="text-[#1B1C1E]">{comment}</p>
        </div> */}
      </div>
    </div>
  );
};
export default CommentSection;
