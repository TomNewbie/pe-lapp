import { Profile } from "./pages/Student";
import { Login } from "./pages/common";
import { RecordTable } from "./components";
function App() {
  const students = [
    {
      Name: "le hoang kim thanh",
      id: "1",
      submittime: "20:00 4/4/2023",
      status: "On time",
      grade: "8",
    },
    {
      Name: "B",
      id: "2",
      submittime: "20:00 5/4/2023",
      status: "Late",
      file: ["hehhe", "he"],
      grade: "8",
    },
    {
      Name: "C",
      id: "3",
      submittime: "21:00 5/4/2023",
      status: "Missing",
      grade: "8",
    },
  ];
  return (
    <div className="App">
      <RecordTable students={students}></RecordTable>
    </div>
  );
}

export default App;
