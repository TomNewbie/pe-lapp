import { Profile, AllCoursesStudent } from "./pages/Student";
import {
  AllCoursesLecturer,
  Profile as ProfileTeacher,
} from "./pages/Lecturer";
import { Login } from "./pages/common";
import { CustomButton, Footer } from "./components";
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <AllCoursesStudent></AllCoursesStudent> */}
      {/* <AllCoursesLecturer></AllCoursesLecturer> */}
      {/* <Profile></Profile> */}
      {/* <Footer></Footer> */}
      <CustomButton variant="filled" text="Submit"></CustomButton>
      <CustomButton variant="border" text="Submit"></CustomButton>
    </div>
  );
}

export default App;
