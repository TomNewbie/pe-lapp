import { Profile, AllCoursesStudent } from "./pages/Student";
import {
  AllCoursesLecturer,
  Profile as ProfileTeacher,
} from "./pages/Lecturer";
import { Login } from "./pages/common";
import { Assignment } from "./components";
function App() {
  const students = [
    { url: "/participants-icon/ava.png", name: "A", mail: "ava.gmail.com" },
    { url: "/participants-icon/ava.png", name: "B", mail: "ava.gmail.com" },
    { url: "/participants-icon/ava.png", name: "C", mail: "ava.gmail.com" },
  ];
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <AllCoursesStudent></AllCoursesStudent> */}
      {/* <AllCoursesLecturer></AllCoursesLecturer> */}
      {/* <Profile></Profile> */}
    </div>
  );
}

export default App;
