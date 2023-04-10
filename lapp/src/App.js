import { Profile, AllCoursesStudent } from "./pages/Student";
import {
  AllCoursesLecturer,
  Profile as ProfileTeacher,
} from "./pages/Lecturer";
import { Login } from "./pages/common";
import Code from "./components/Code";
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <AllCoursesStudent></AllCoursesStudent> */}
      {/* <AllCoursesLecturer></AllCoursesLecturer> */}
      {/* <Profile></Profile> */}
      <Code code="123423"></Code>
    </div>
  );
}

export default App;
