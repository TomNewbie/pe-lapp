// import { Login } from "./pages/common";
import { ProfileTeacher } from "./pages/Lecturer";
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      <ProfileTeacher
        courseName={"Programming Exercise"}
        semester={"SS2023"}
      ></ProfileTeacher>
    </div>
  );
}

export default App;
