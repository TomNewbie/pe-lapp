// import { NavbarStudent } from "./components";
// import { Login } from "./pages/common";
// import { Dropdown, SearchBox } from "./components";
// import {File} from "./components";
import {Participants} from "./components";
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <NavbarStudent></NavbarStudent> */}
      {/* <Dropdown></Dropdown> */}
      {/* <SearchBox px={10} py={1}></SearchBox> */}
      {/* <File></File> */}
      <Participants teacher={"Tran Tuan Anh"} student={"Vuong Khanh Linh"}></Participants>
    </div>
  );
}

export default App;
