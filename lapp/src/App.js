// import { Login } from "./pages/common";
import { ProfileTeacher } from "./pages/Lecturer";
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      <ProfileTeacher
        courseName={"Programming Exercise"}
        semester={"SS2023"}
        name={"Quan"}
        email={"n4ifmnifm44m@gmail.com"}
        faculty={"Computer Science"}
      ></ProfileTeacher>
    </div>
  );
}

export default App;
