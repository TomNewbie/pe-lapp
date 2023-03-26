// import { DocumentSearchIcon } from "@heroicons/vue/outline";

const SearchBox = () => {
  return (
    <div>
      <div className="search_box">
        {/* <DocumentSearchIcon class="w-5 h-5"></DocumentSearchIcon> */}
        <img src="/SearchBox/searchicon.svg" alt="" width={25} height={25} />
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
