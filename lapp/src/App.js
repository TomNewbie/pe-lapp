import { Profile, AllCoursesStudent } from "./pages/Student";
import {
  AllCoursesLecturer,
  Profile as ProfileTeacher,
} from "./pages/Lecturer";
import { Login } from "./pages/common";
import { UploadMaterial } from "./components";
import { Notification } from "./components";
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <AllCoursesStudent></AllCoursesStudent> */}
      {/* <AllCoursesLecturer></AllCoursesLecturer> */}
      <Profile
        name={"Quan"}
        id={"12345"}
        email={"asdawd@ssteunsd.wdcom"}
      ></Profile>
    </div>
  );
}

export default App;
