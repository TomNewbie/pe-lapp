const Search_box = () => {
    return (
        <div>
            <div className="relative flex item-center">
                <img src="/component_icons/search.svg" alt ="searchIcon" width={25} height={25} className="absolute ml-44 mt-2"></img>
                <input type="text" class="px-5 py-2 border-2 border-black rounded-xl" placeholder="Search"></input>
            </div>
        </div>
    );
  };
  export default Search_box;
  