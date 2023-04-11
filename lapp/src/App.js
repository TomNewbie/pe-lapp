// import { Profile } from "./pages/Student";
// import { Login } from "./pages/common";
// import { UploadMaterial } from "./components";
import { Notification} from "./components";
function App() {
  const Files=[
    {name:"Probability"},
    {name:"Statistic"},
    {name:"B"},
    {name:"C"},
    {name:"D"}
  ]
  return (
    <div className="App">
      {/* <UploadMaterial></UploadMaterial>
      <Profile></Profile> */}
      <Notification status={"true"} title={"Probability"} content={"Today we learn Bayes Rules, hope you like the lecture."} Files={Files}></Notification>
    </div>
  );
}

export default App;
