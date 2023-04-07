const SubmitEx = () => {
  return (
    <div class="flex flex-col justify-around p-2 w-60 rounded-lg bg-white text-xl text-[#1B1C1E] shadow-xl ">
      <div class="w-full">
        <div class="flex flex-row justify-between place-items-center">
          <p class="text-3xl ">Your Work</p>
          <p class="text-2xl">Turn in</p>
          {/* <p class="text-2xl text-[#BF353A]">Turn in late</p> */}
        </div>

        <div class="space-y-3">
          <div class="grid w-7/8 h-24 bg-[#F4C2C2]/40 rounded-xl">
            <img
              class="w-8 h-8 place-self-center"
              src="/PostAnnEx/Upload.png"
              alt=""
            />
          </div>

          <div class="grid">
            <button class="bg-[#CC6666] w-20 rounded-xl place-self-center">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitEx;
