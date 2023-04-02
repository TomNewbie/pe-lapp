import { Footer } from "./components";
import { Login } from "./pages/common";
import { CoursecardStudent } from "./components";
import { CoursecardTeacher } from "./components";
import { NavbarStudent } from "./components";

function App() {
  return (
    <div className="App">
      <Login></Login>
      <CoursecardStudent />
      <CoursecardTeacher />
    </div>
  );
}

export default App;
