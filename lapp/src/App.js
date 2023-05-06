import { NavbarStudent, NavbarLecturer } from "./components";
// import { Login } from "./pages/common";
// import { Dropdown, SearchBox } from "./components";
import { StudentNavCourse, TeacherNavCourse} from "./components";
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <NavbarStudent></NavbarStudent> */}
      {/* <NavbarLecturer /> */}
      {/* <Dropdown></Dropdown> */}
      <TeacherNavCourse tab1={"tab content 1"} tab2={"tab content 2"} tab3={"tab content 3"} tab4={"tab content 4"}></TeacherNavCourse>
    </div>
  );
}

export default App;
