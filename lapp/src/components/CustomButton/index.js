const CustomButton = ({ variant, text }) => {
  const style = {
    filled:
      "px-14 py-2 inline-flex items-center rounded-xl bg-[#CC6666] text-[28px] text-center hover:bg-[#9E4244] text-[#F1E0CE]",
    border:
      "px-14 py-2 inline-flex items-center rounded-xl border-[#B02B3B] border-4 text-[28px] text-center  hover:bg-[#B02B3B] hover:text-[#F1E0CE]",
  };

  return (
    <div>
      <button className={style[variant]}>
        <span>{text}</span>
      </button>
      {/* <div>Thanh</div> */}
    </div>
  );
};

export default CustomButton;
