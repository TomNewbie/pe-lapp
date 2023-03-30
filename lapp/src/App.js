// import { NavbarStudent } from "./components";
// import { Login } from "./pages/common";
import { Dropdown, SearchBox } from "./components";
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <NavbarStudent></NavbarStudent> */}
      {/* <Dropdown></Dropdown> */}
      <SearchBox variant={"big"} />
      <SearchBox variant={"small"} />
    </div>
  );
}

export default App;
