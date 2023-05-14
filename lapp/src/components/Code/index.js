const Code = ({ code }) => {
  function copyToClipboard() {
    navigator.clipboard.writeText(code);
  }
  return (
    <div className="w-full mt-8 bg-white shadow-xl rounded-xl">
      <p className="text-5xl underline text-[#560319] ml-3">Class code</p>
      <p
        className="text-4xl ml-4 text-[#560319] text-center w-48 truncate cursor-pointer"
        onClick={copyToClipboard}
        title={code}
      >
        {code}
      </p>
    </div>
  );
};

export default Code;
