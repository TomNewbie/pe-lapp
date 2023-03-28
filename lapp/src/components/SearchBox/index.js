function SearchBox({ px, py }) {
  const style = `px-${px} py-${py} border-2 border-black rounded-xl text-xl`;
  return (
    <div>
      <div className="relative flex items-center">
        <img
          src="/SearchBox/searchicon.svg"
          alt=""
          className="absolute ml-32"
          width={25}
          height={25}
        />
        <input type="text" className={style} placeholder="Search"></input>
      </div>
    </div>
  );
}
export default function SearchBox1({ px, py }) {
  return <SearchBox px={6} py={0}></SearchBox>;
}
