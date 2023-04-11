import { NavbarStudent, NavbarLecturer } from "./components";
// import { Login } from "./pages/common";
// import { Dropdown, SearchBox } from "./components";
import { NavbarCourse } from "./components";
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <NavbarStudent></NavbarStudent> */}
      {/* <NavbarLecturer /> */}
      {/* <Dropdown></Dropdown> */}
      <NavbarCourse tab1={"tab content 1"} tab2={"tab content 2"} tab3={"tab content 3"}></NavbarCourse>
    </div>
  );
}

export default App;
