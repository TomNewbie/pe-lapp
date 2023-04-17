import { Footer, NavbarLecturer, NavbarStudent } from "../../../components";

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <p className="text-8xl">Home</p>
      <div>
        <button className="p-8 h-12 text-white text-center text-2xl bg-[#B02B3B]/70 border border-[#560319] px-5 py-2 rounded-full hover:bg-[#CC6666]/40">
          <Link to="/login">Login</Link>
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
