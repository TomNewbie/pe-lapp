import { Profile } from "./pages/Student";
import { Login } from "./pages/common";
import { RecordTable } from "./components";
function App() {
  return (
    <div className="App">
      <RecordTable
        Name={"Le Hoang Kim Thanh"}
        id="18047"
        submittime="20:00 4/4/2023"
        status="On time"
        grade="8"></RecordTable>
    </div>
  );
}

export default App;
