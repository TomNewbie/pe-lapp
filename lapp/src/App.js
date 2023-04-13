import {
  AllCoursesStudent,
  CoursePage,
  ExerciseDetail,
  JoinCourse,
  Lecturers,
  Profile,
} from "./pages/Student";
import { Login } from "./pages/common";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className=" App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/allcourses" element={<AllCoursesStudent />}></Route>
          <Route path="/lecturers" element={<Lecturers />}></Route>
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
