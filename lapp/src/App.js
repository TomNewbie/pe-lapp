import { Profile, AllCoursesStudent } from "./pages/Student";
import {
  AllCoursesLecturer,
  Profile as ProfileTeacher,
} from "./pages/Lecturer";
import { Login } from "./pages/common";
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <AllCoursesStudent></AllCoursesStudent> */}
      {/* <AllCoursesLecturer></AllCoursesLecturer> */}
      <Profile></Profile>
    </div>
  );
}

export default App;
