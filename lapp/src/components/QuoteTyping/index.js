const QuoteComponent = () => {
  return (
    <div className="relative">
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
      <img
        src="/Quote/bangtinh.png"
        alt=""
        className="absolute left-20 top-10"
      />
      <img
        src="/Quote/eke.png"
        alt=""
        className="w-[80px] h-[80px] absolute left-32 top-20"
      />
      <img
        src="/Quote/eke.png"
        alt=""
        className="w-[80px] h-[80px] absolute right-32 top-96"
      />
      <img
        src="/Quote/ruler.png"
        alt=""
        className="w-[40px] h-[40px] absolute top-16 right-20"
      />
      <img
        src="/Quote/congtrunhanchia.gif"
        alt=""
        className="w-[40px] h-[40px] absolute bottom-48 left-80"
      />
      <img
        src="/Quote/congtrunhanchia.gif"
        alt=""
        className="w-[40px] h-[40px] absolute top-48 right-80"
      />
      <img
        src="/Quote/ghibai.gif"
        alt=""
        className="w-[40px] h-[40px] absolute bottom-6 left-20"
      />
      <img
        src="/Quote/pencil.gif"
        alt=""
        className="w-[40px] h-[40px] absolute right-20 bottom-10"
      />
    </div>
  );
};

export default QuoteComponent;
