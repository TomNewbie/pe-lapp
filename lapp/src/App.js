import { Footer } from "./components";
import { Login } from "./pages/common";
import { CoursecardStudent } from "./components";
import { CoursecardTeacher } from "./components";
import { NavbarStudent } from "./components";

function App() {
  return (
    <div className="App">
      <Login></Login>
      <CoursecardStudent
        courseName={"Course name"}
        lecturerName={"Lecturer's name"}
        progress={"% Progress"}
      />
      {/* <CoursecardTeacher
        courseName={"Course name"}
        numberOfParticipants={"#participants"}
        semester={"semester"}
      /> */}
    </div>
  );
}

export default App;
