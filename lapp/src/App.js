// import { Profile } from "./pages/Student";
// import { Login } from "./pages/common";
// import { UploadMaterial } from "./components";
import { Notification} from "./components";
// import { NavbarStudent } from "./components";
// import { Login } from "./pages/common";
import { Dropdown } from "./components";
import {OverallGrade} from "./components";
function App() {
  // const Files=[
  //   {name:"Probability"},
  //   {name:"Statistic"},
  //   {name:"B"},
  //   {name:"C"},
  //   {name:"D"}
  // ]

  const exercises=[
    {duedate: "No due date", exName:"Exercise 1"},
    {duedate: "No due date", exName:"Exercise 2"}
  ]

  const students=[
    {name:"A",id:"12345",overallGrade:"No grade",total:"2"},
    {name:"B",id:"45678",overallGrade:"No grade",total:"1"}
  ]
  return (
    <div className="App">
      {/* <UploadMaterial></UploadMaterial>
      <Profile></Profile> */}
      {/* <Notification status={"true"} title={"Probability"} content={"Today we learn Bayes Rules, hope you like the lecture."} Files={Files}></Notification> */}
      <OverallGrade students={students} exercises={exercises}></OverallGrade>
    </div>
  );
}

export default App;
