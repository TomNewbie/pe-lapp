const SearchBox = () => {
  return (
    <div>
      <div className="relative flex items-center">
        <img src="/SearchBox/searchicon.svg" alt="" className="absolute ml-40"width={25} height={25} />
        <input
          type="text"
          class="px-3 py-2 border-2 border-black rounded-xl"
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
};
export default SearchBox;
