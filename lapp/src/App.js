import { Profile, AllCoursesStudent } from "./pages/Student";
import {
  AllCoursesLecturer,
  Profile as ProfileTeacher,
} from "./pages/Lecturer";
import { Login } from "./pages/common";
import { UploadMaterial } from "./components";
function App() {
  return (
    <div className=" App">
      <UploadMaterial></UploadMaterial>
    </div>
  );
}

export default App;
