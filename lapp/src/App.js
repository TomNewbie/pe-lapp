import { ExerciseSection } from "./components";
// import { Login } from "./pages/common";
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      <ExerciseSection
        name={"Exercise Name"}
        deadline={"Monday, 15 February 2023, 12:00 AM"}
        grade={"null"}
        status={"undone"}
      ></ExerciseSection>
    </div>
  );
}

export default App;
