const Quote = () => {
  return (
    <div class="bg-[#FFFAF0] relative">
      <img src="/Quote/bangtinh.png" alt="" class="absolute left-80 top-48" />
      <img
        src="/QUote/eke.png"
        alt=""
        class="w-[80px] h-[80px] absolute pl-4 ml-80 left-96 top-56"
      />
      <img
        src="/QUote/ruler.png"
        alt=""
        class="w-[40px] h-[40px] bottom-16 left-48"
      />
      <img src="/QUote/congtrunhanchia.gif" alt="" class="w-[40px] h-[40px]" />
      <img
        src="/QUote/ghibai.gif"
        alt=""
        class="w-[40px] h-[40px] absolute bottom-10 left-20"
      />
      <img src="/QUote/pencil.gif" alt="" class="w-[40px] h-[40px]" />
      <div class="flex min-h-screen items-center justify-center  p-10">
        <div class="w-max">
          <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-[#B02B3B] pr-5 text-5xl text-[#B02B3B] font-bold">
            "Education is the most powerfull weapon which you can use to change
            the world"
          </h1>
          <p class="text-right overflow-hidden whitespace-nowrap pr-5 text-5xl text-[#B02B3B]/50 font-bold">
            -Nelson Mandela-
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
