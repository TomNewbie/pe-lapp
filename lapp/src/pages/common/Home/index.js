import {
  Footer,
  KeyFeature,
  NumCountUp,
  QuoteTyping,
} from "../../../components";
import FeedbackSection from "../../../components/Feedback";
import Login from "../Login";
/**
 * Component that represents the home page of the application.
 * This component renders a login form, a key feature section, and a footer section.
 */
const Home = () => {
  return (
    <div className="scroll-smooth">
      <Login />
      <div className="flex flex-row justify-center mb-32 space-x-16 mt-96">
        <NumCountUp target={1700} content={"Students using our app"} />
        <NumCountUp target={1000} content={"Lecturers using our app"} />
        <NumCountUp target={200} content={"Organizations using our app"} />
      </div>
      <div className="flex justify-center mt-40 mb-12">
        <KeyFeature />
      </div>

      <QuoteTyping />
      <FeedbackSection />
      <Footer></Footer>
    </div>
  );
};

export default Home;
