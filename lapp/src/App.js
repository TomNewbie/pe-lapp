import { Profile } from "./pages/Student";
import { Login } from "./pages/common";
import { UploadMaterial } from "./components";
import { Notification} from "./components";
function App() {
  return (
    <div className="App">
      {/* <UploadMaterial></UploadMaterial>
      <Profile></Profile> */}
      <Notification file={"true"}></Notification>
    </div>
  );
}

export default App;
