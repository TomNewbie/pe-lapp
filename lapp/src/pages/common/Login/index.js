import { Footer } from "../../../components";
const Login = () => {
  return (
    <div>
      {/* Start: logo */}
      <div className="relative">
        <div>
          <div className="absolute top-2 ml-14">
            <img src="/login/Logo.png" alt="logo" width={70} height={70} />
          </div>
          <div className="absolute -top-[116px] right-0">
            <img
              src="/login/Ellipse1.png"
              alt="ellipse"
              width={852}
              height={500}
            />
          </div>
          <div className="absolute right-0 -top-[246px]">
            <img
              src="/login/Ellipse2.png"
              alt="ellipse"
              width={1140}
              height={500}
            />
          </div>
        </div>
        {/* End: Logo */}

        {/* Start: Intro section */}
        <div class="absolute top-0">
          <div class="grid grid-cols-2">
            <div className="pl-[50px] pt-44">
              <p class="text-dongle text-8xl text-black text-bold pl-0">
                The best learning
              </p>
              <p class="text-dongle text-8xl text-black text-bold pl-0">
                management system
              </p>
              {/* Start: Log in Button */}
              <div className="flex justify-center ">
                <button className=" w-80 h-14 mt-6 rounded-lg border-2 border-[#CC6666] loginBtn">
                  <span className="text-[40px] font-bold text-black opacity-100">
                    Log in to Google
                  </span>
                </button>
              </div>
              {/* End: Log in Button */}
            </div>
            <div class="absolute right-2 top-[12px]">
              <img src="/login/image.svg" alt="image1" />
            </div>
          </div>
        </div>
        {/* End: Intro section */}

        {/* Start: icon section */}
        <div>
          <div className="absolute top-36 left-[230px]">
            <img
              src="/login/airplane.png"
              alt="airplane"
              width={40}
              height={40}
            />
          </div>

          <div className="absolute top-40 left-[520px]">
            <img src="/login/bling.png" alt="bling" width={40} height={40} />
          </div>

          <div className="absolute top-[360px] left-[30px] ">
            <img src="/login/over.png" alt="over" width={60} height={60} />
          </div>
          <div className="absolute top-[460px] left-[140px]">
            <img src="/login/under.png" alt="under" width={60} height={60} />
          </div>
          <div className="absolute top-[360px] left-[520px]">
            <img src="/login/arrow.png" alt="arrow" width={120} height={120} />
          </div>
          <div className="absolute top-[460px] left-[480px]">
            <img
              src="/login/diamond.png"
              alt="diamond"
              width={30}
              height={30}
            />
          </div>
        </div>
        {/* End: icon section */}
      </div>
      <div className="absolute bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Login;
