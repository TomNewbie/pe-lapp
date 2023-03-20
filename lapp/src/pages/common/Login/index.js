import { Footer } from "../../../components";
const Login = () => {
  return (
    <div>
      {/* Start: logo */}
      <div className="relative">
        <div class="flex justify-between">
          <div class="m-3">
            <img src="/login/Logo.png" alt="logo" width={100} height={100} />
          </div>
          <div>
            <img
              src="/login/Ellipse.png"
              alt="ellipse"
              width={700}
              height={500}
            />
          </div>
        </div>
        {/* End: Logo */}

        {/* Start: Intro section */}
        <div class="absolute top-0">
          <div class="grid grid-cols-2">
            <div>
              <p class="text-center text-dongle text-7xl pt-36 text-black">
                The best
              </p>
              <p class="text-center text-dongle text-7xl text-black">
                learning management system
              </p>
              <p class="text-left text-2xl px-6 ml-10 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                rutrum ipsum metus, eget pretium ipsum blandit eu. Maecenas
                ultrices eros non libero semper placerat eget eget urna.
                Maecenas et orci diam. Sed quis urna sit amet magna tempor
                viverra et a orci. Proin lacinia et est a laoreet. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
              {/* Start: Log in Button */}
              <div className="flex justify-center pt-12">
                <button className="px-20 text-4xl text-black rounded-lg bg-pink1">
                  Log in to Google
                </button>
              </div>
              {/* End: Log in Button */}
            </div>
            <div class="h-12">
              <img src="/login/image.svg" alt="image1" />
            </div>
          </div>
        </div>
        {/* End: Intro section */}
      </div>
      <div className="absolute bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Login;
