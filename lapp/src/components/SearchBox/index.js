function SearchBox({size1,size2}) {
  return (
    <div>
      <div className="relative flex items-center" width={size1} height={size2}>
        <img src="/SearchBox/searchicon.svg" alt="" className="absolute ml-32"width={25} height={25} />
        <input
          type="text"
          className="px-3 py-2 border-2 border-black rounded-xl text-xl"
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
}
export default function SearchBox1({size1,size2}){
  return(
    <SearchBox size1={200} size2={50}></SearchBox>
  );
}
