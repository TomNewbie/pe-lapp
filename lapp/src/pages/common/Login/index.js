import { useEffect } from "react";
import { useAuth } from "../../../components/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (auth.user) {
      navigate("/allcourses");
    }
  });
  const handleLogin = () => {
    auth.login();
  };
  return (
    <div>
      <div className="static ">
        <div>
          {/* Start: logo */}
          <div className="absolute top-2 ml-14">
            <img src="/login/Logo.png" alt="logo" width={70} height={70} />
          </div>
          {/* End: Logo */}
          <div className="absolute right-0 -top-16 ">
            <img
              src="/login/Ellipse1.png"
              alt="ellipse"
              width={852}
              height={500}
            />
          </div>
          <div className="absolute right-0 -top-36">
            <img
              src="/login/Ellipse2.png"
              alt="ellipse"
              width={1140}
              height={500}
            />
          </div>
        </div>

        {/* Start: Intro section */}
        <div class="top-0 right-0 left-0">
          <div class="grid grid-cols-3">
            {/* Start: Text */}
            <div className="relative col-span-2 pt-56">
              <p class="text-dongle text-9xl text-black text-bold pl-24">
                The best learning
              </p>
              <p class="text-dongle text-9xl text-black text-bold pl-24">
                management system
              </p>
              {/* Start: Log in Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleLogin}
                  className=" w-80 h-14 mt-6 mr-56 rounded-lg border-2 border-[#CC6666] loginBtn"
                >
                  <span className="text-5xl font-bold text-black opacity-100">
                    Log in to Google
                  </span>
                </button>
              </div>
              {/* End: Log in Button */}

              {/* Start: icon section */}
              <div className="absolute left-80 top-48">
                <img
                  src="/login/airplane.png"
                  alt="airplane"
                  width={40}
                  height={40}
                />
              </div>

              <div className="absolute pl-4 ml-80 left-96 top-56">
                <img
                  src="/login/bling.png"
                  alt="bling"
                  width={40}
                  height={40}
                />
              </div>

              <div className="absolute bottom-10 left-20">
                <img src="/login/over.png" alt="over" width={60} height={60} />
              </div>
              <div className="absolute -bottom-16 left-48">
                <img
                  src="/login/under.png"
                  alt="under"
                  width={60}
                  height={60}
                />
              </div>
              <div className="absolute bottom-1 right-80">
                <img
                  src="/login/arrow.png"
                  alt="arrow"
                  width={120}
                  height={120}
                />
              </div>
              <div className="absolute ml-48 -bottom-12 left-96">
                <img
                  src="/login/diamond.png"
                  alt="diamond"
                  width={30}
                  height={30}
                />
              </div>
              {/* End: icon section */}

              {/* Start: More button */}
              <div class="absolute ml-48 -bottom-28 left-[600px] ">
                <img
                  src="/login/down.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="animate-bounce"
                />
              </div>
              <div class="absolute ml-48 -bottom-36 left-[500px] text-3xl">
                <p className="animate-bounce">Scroll down for more details</p>
              </div>
              {/* End: More button */}
            </div>
            {/* End: Text */}

            {/* Start: Image section */}
            <div class="absolute right-8 top-8">
              <img src="/login/image.svg" alt="image1" />
            </div>
            {/* End: Image section */}
          </div>
        </div>
        {/* End: Intro section */}
      </div>
    </div>
  );
};
export default Login;
