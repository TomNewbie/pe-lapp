import { Footer, KeyFeature } from "../../../components";
import Login from "../Login";
const Home = () => {
  return (
    <div>
      <Login />
      <div className="flex justify-center mt-40 mb-12">
        <KeyFeature />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
