const UploadMaterial = () => {
  return (
    <div class="flex flex-col justify-around p-2 w-60 h-52 rounded-lg bg-white text-xl text-[#1B1C1E] shadow-xl">
      <p class="text-center text-3xl ">Drop file here</p>
      <div class="grid w-7/8 h-24 bg-[#F4C2C2]/40 rounded-xl">
        <img
          class="place-self-center w-7 h-7"
          src="/UploadMaterial/AddFileIcon.png"
          alt=""
        />
      </div>

      <div class="grid place-self-center w-44 p-2">
        <button class="w-7/8 h-6 rounded-xl bg-[#CC6666]">
          Choose from your device
        </button>
      </div>
    </div>
  );
};

export default UploadMaterial;
