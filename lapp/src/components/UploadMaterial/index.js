import CustomButton from "../../components/CustomButton";

const UploadMaterial = () => {
  return (
    <div class="flex flex-col justify-around p-2 w-96 h-56 rounded-lg bg-white text-xl text-[#1B1C1E] shadow-xl">
      <p class="text-center text-3xl ">Drop file here</p>
      <div class="grid w-7/8 h-24 bg-[#F4C2C2]/40 rounded-xl">
        <img
          class="place-self-center w-7 h-7"
          src="/UploadMaterial/AddFileIcon.png"
          alt=""
        />
      </div>

      <div class="grid place-self-center w-54 p-2">
        {/* <button class="w-7/8 h-6 rounded-xl bg-[#CC6666] hover:bg-[#9E4244] text-[#F1E0CE]">
          Choose from your device
        </button> */}
        <CustomButton
          variant={"filled"}
          className={"px-2 py-1"}
          text={"Choose from your device"}
        ></CustomButton>
      </div>
    </div>
  );
};

export default UploadMaterial;
