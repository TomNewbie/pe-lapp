// import { NavbarStudent, NavbarLecturer } from "./components";
// import { Login } from "./pages/common";
// import { Dropdown, SearchBox } from "./components";
// import { NavbarCourse} from "./components";
import {StudentCourseName} from "./components";
// import {TeacherCourseName} from "./components";
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <NavbarStudent></NavbarStudent> */}
      {/* <NavbarLecturer /> */}
      {/* <Dropdown></Dropdown> */}
      {/* <NavbarCourse></NavbarCourse> */}
      {/* <TeacherCourseName name={"Software Engineering"} semester={"Winter 2022"}></TeacherCourseName> */}
      <StudentCourseName name={"Software Engineering"} teacher={"Tran Tuan Anh"}></StudentCourseName>
    </div>
  );
}

export default App;
