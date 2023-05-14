const Members = () => {
  return (
    <div className="flex flex-col items-center mb-2 text-8xl">
      <div>Our team Members</div>
      <div className="grid grid-cols-4 gap-6 mt-8 ml-20 text-center">
        <div className="1st ava h-fit w-fit">
          <img
            src="/Members/Thanh.png"
            alt=""
            className="w-48 h-48 duration-500 ease-in scale-100 rounded-full hover:scale-125"
          ></img>
          <p className="text-4xl">Le Hoang Kim Thanh</p>
          <p className="text-3xl font-light">Leader, Front-end</p>
        </div>

        <div className="2nd ava h-fit w-fit">
          <img
            src="/Members/Linh.png"
            alt=""
            className="w-48 h-48 duration-500 ease-in scale-100 rounded-full hover:scale-125"
          ></img>
          <p className="text-4xl">Vuong Khanh Linh</p>
          <p className="text-3xl font-light">Front-end, UI design</p>
        </div>

        <div className="3rd ava h-fit w-fit">
          <img
            src="/Members/Quynh.png"
            alt=""
            className="w-48 h-48 duration-500 ease-in scale-100 rounded-full hover:scale-125"
          ></img>
          <p className="text-4xl">Pham Nguyen Dan Quynh</p>
          <p className="text-3xl font-light">Front-end, UI design</p>
        </div>

        <div className="4th ava h-fit w-fit">
          <img
            src="/Members/MinhQuan.png"
            alt=""
            className="w-48 h-48 duration-500 ease-in scale-100 rounded-full hover:scale-125"
          ></img>
          <p className="text-4xl">Tran Nguyen Minh Quan</p>
          <p className="text-3xl font-light">Front-end</p>
        </div>

        <div className="5th ava h-fit w-fit">
          <img
            src="/Members/AnhQuan.png"
            alt=""
            className="w-48 h-48 duration-500 ease-in scale-100 rounded-full hover:scale-125"
          ></img>
          <p className="text-4xl">Nguyen Le Anh Quan</p>
          <p className="text-3xl font-light">Back-end, API design</p>
        </div>

        <div className="6th ava h-fit w-fit">
          <img
            src="/Members/Tho.jpg"
            alt=""
            className="w-48 h-48 duration-500 ease-in scale-100 rounded-full hover:scale-125"
          ></img>
          <p className="mr-48 text-4xl">Phan Chi Tho</p>
          <p className="-ml-6 text-3xl font-light">
            Back-end, API design, Database design
          </p>
        </div>

        <div className="7th ava h-fit w-fit">
          <img
            src="/Members/Nguyen.png"
            alt=""
            className="w-48 h-48 duration-500 ease-in scale-100 rounded-full hover:scale-125"
          ></img>
          <p className="text-4xl">Le Hoang Dang Nguyen</p>
          <p className="text-3xl font-light">Devops, Tester</p>
        </div>

        <div className="8th ava h-fit w-fit">
          <img
            src="/Members/Thong.png"
            alt=""
            className="w-48 h-48 duration-500 ease-in scale-100 rounded-full hover:scale-125"
          ></img>
          <p className="text-4xl">Hoang Minh Thong</p>
          <p className="text-3xl font-light">Devops</p>
        </div>
      </div>
    </div>
  );
};

export default Members;
