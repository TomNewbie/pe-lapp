import { Footer, KeyFeature } from "../../../components";
import Login from "../Login";
/**
 * Component that represents the home page of the application.
 * This component renders a login form, a key feature section, and a footer section.
 */
const Home = () => {
  return (
    <div className="scroll-smooth">
      <Login />
      <div className="flex justify-center mt-40 mb-12">
        <KeyFeature />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
