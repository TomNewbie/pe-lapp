import { Profile } from "./pages/Student";
import { Login } from "./pages/common";
import { Assignment } from "./components";
function App() {
  return (
    <div className="App">
      <Assignment
        assignment={"Assignment 1"}
        submission={"5 / 40"}
        duedate={"30 / 02 / 2023"}></Assignment>
    </div>
  );
}

export default App;
