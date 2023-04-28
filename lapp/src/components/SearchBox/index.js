function SearchBox({ variant }) {
  const style = {
    small: "w-36 h-8 border-2 border-black rounded-xl text-xl",
    big: "w-56 h-8 border-2 border-black rounded-xl text-xl",
  };
  const icon = {
    small: "absolute ml-28",
    big: "absolute ml-48",
  };
  return (
    <div>
      <div className="flex items-center ">
        <img
          src="/SearchBox/searchicon.svg"
          alt=""
          className={icon[variant]}
          width={25}
          height={25}
        />
        <input
          type="text"
          className={style[variant]}
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
}
export default SearchBox;
