const CustomButton = ({ variant, text, className, handleButton }) => {
  const style = {
    filled: `${className} inline-flex items-center rounded-2xl bg-[#9e4244] text-[28px] text-center hover:bg-[#80002b] hover:text-[#FDE3C8] text-[#FDE3C8]`,
    border: `${className} inline-flex items-center rounded-2xl border-[#B02B3B] border-4 text-[28px] text-center  hover:bg-[#B02B3B] hover:text-[#F1E0CE]`,
  };

  return (
    <div>
      <button
        className={style[variant]}
        onClick={() => {
          handleButton();
        }}
      >
        <span>{text}</span>
      </button>
      {/* <div>Thanh</div> */}
    </div>
  );
};

export default CustomButton;
