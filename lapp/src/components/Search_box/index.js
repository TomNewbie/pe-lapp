import {SearchIcon} from "@heroicons/vue/outline";

const Search_box = () => {
    return (
        <div>
            <div className="search_box">
                <SearchIcon class="w-5 h-5"></SearchIcon>
                <input type="text" class="px-3 py-2 border-2 border-black rounded-xl" placeholder="Search"></input>
            </div>
        </div>
    );
  };
  export default Search_box;
  