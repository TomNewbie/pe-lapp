import CustomButton from "../../CustomButton";

const SubmitEx = ({status}) => {
  return (
    <div class="flex flex-col justify-around p-2 w-60 rounded-lg text-xl text-[#1B1C1E] bg-[#FFFCF7] shadow-xl w-[280px] h-fit border">
      <div class="w-full">
        <div class="flex flex-row justify-between place-items-center">
          <p class="text-3xl pt-2">Your Work</p>
        </div>

        <div class="space-y-4">
          <div class="grid w-7/8 h-24 bg-[#F4C2C2]/30 rounded-xl">
            <img
              class="w-8 h-8 place-self-center hover:bg-[#9F5F5F]/30 rounded-full"
              src="/PostAnnEx/Upload.png"
              alt=""
            />
          </div>

          <div class="grid justify-center pb-2">
            <CustomButton variant={"filled"} className={"px-5 pt-1 pb-1"} text={"Submit"}></CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitEx;
