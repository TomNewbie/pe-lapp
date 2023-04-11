// import { NavbarStudent } from "./components";
// import { Login } from "./pages/common";
// import { Dropdown, SearchBox } from "./components";
// import {File} from "./components";
import { Participants } from "./components";
function App() {
  const students = [
    { url: "/participants-icon/ava.png", name: "A", mail: "ava.gmail.com" },
    { url: "/participants-icon/ava.png", name: "B", mail: "ava1.gmail.com" },
    { url: "/participants-icon/ava.png", name: "C", mail: "ava2.gmail.com" },
  ];
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <NavbarStudent></NavbarStudent> */}
      {/* <Dropdown></Dropdown> */}
      {/* <SearchBox px={10} py={1}></SearchBox> */}
      {/* <File></File> */}
      <Participants
        teacher={"Tran Tuan Anh"}
        students={students}
      ></Participants>
    </div>
  );
}

export default App;
