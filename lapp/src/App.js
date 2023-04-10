import { CommentSection } from "./components";
// import { Login } from "./pages/common";
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      <CommentSection
        grade={"100/100"}
        comment={"Excellent! Keep it up!"}
      ></CommentSection>
    </div>
  );
}

export default App;
