import { Profile, AllCoursesStudent } from "./pages/Student";
import {
  AllCoursesLecturer,
  Profile as ProfileTeacher,
} from "./pages/Lecturer";
import { Login } from "./pages/common";
import { UploadMaterial } from "./components";
import { Notification } from "./components";
const courses = [
  { name: "Programming Exercise", semester: "SS2023" },
  { name: "Programming Exercise", semester: "SS2024" },
  { name: "Programming Exercise", semester: "SS2025" },
];
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
      {/* <ProfileTeacher
        courses={courses}
        name={"Quan"}
        email={"n4ifmnifm44m@gmail.com"}
        faculty={"Computer Science"}
        phoneNumber={"113"}
      ></ProfileTeacher> */}
    </div>
  );
}

export default App;
