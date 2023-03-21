import { Footer } from "./components";
import { Login } from "./pages/common";
import { CoursecardStudent } from "./components";
import {NavbarStudent} from "./components";

function App() {
  return (
    <div className="App">
      <Login></Login>
      <CoursecardStudent/>

    </div>
  );
}

export default App;
