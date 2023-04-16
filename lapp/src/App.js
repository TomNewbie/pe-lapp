import RequireAuth from "./components/RequireAuth.js";
import { AuthProvider } from "./components/auth";
import {
  AllCoursesLecturer,
  Profile as ProfileTeacher,
} from "./pages/Lecturer";
import { Login } from "./pages/common";
import { UploadMaterial } from "./components";
import { Notification } from "./components";
function App() {
  const lecturers = [
    {
      name: "a",
      faculty: "cse",
      mail: "sd@vgu.edu.vn",
      url: "/participants-icon/ava.png",
    },
    {
      name: "b",
      faculty: "ba",
      mail: "sd1@vgu.edu.vn",
      url: "/participants-icon/ava.png",
    },
    {
      name: "c",
      faculty: "cse",
      mail: "sd2@vgu.edu.vn",
      url: "/participants-icon/ava.png",
    },
    {
      name: "d",
      faculty: "ba",
      mail: "s@vgu.edu.vn",
      url: "/participants-icon/ava.png",
    },
    {
      name: "e",
      faculty: "ece",
      mail: "s3d@vgu.edu.vn",
      url: "/participants-icon/ava.png",
    },
  ];
  return (
    <div className="App">
      <Login></Login>
      {/* <AllCoursesStudent></AllCoursesStudent> */}
      {/* <AllCoursesLecturer></AllCoursesLecturer> */}
      {/* <Profile></Profile> */}
    </div>
  );
}

export default App;
