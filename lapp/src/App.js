import { Profile, AllCoursesStudent } from "./pages/Student";
import {
  AllCoursesLecturer,
  Profile as ProfileTeacher,
} from "./pages/Lecturer";
import { Login } from "./pages/common";
import { JoinCourse } from "./components";
import { CreateCourse } from "./components";
import { PostAnnEx } from "./components";
import { SubmitEx } from "./components";
function App() {
  return (
    <div className=" App">
      <PostAnnEx type={""}></PostAnnEx>
      <SubmitEx></SubmitEx>
      <CreateCourse></CreateCourse>
      <JoinCourse></JoinCourse>
    </div>
  );
}

export default App;
