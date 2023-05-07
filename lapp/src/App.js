import RequireAuth from "./components/RequireAuth.js";
import { Route, Routes } from "react-router-dom";
import {
  AllCoursesStudent,
  CoursePage,
  Exercise,
  Lecturers,
  Profile,
} from "./pages/Student";
import {
  AllCoursesLecturer,
  Profile as ProfileLecturer,
  CoursePage as CoursePageLecturer,
  ExerciseDetail as ExerciseLecturer,
} from "./pages/Lecturer";
import { Home, Errorpage } from "./pages/common";
import { useAuth } from "./components/auth.js";

function App() {
  const auth = useAuth();
  const role = auth.user?.role;
  return (
    <div className=" App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route element={<RequireAuth />}>
          <Route
            path="/allcourses"
            element={
              role === "student" ? (
                <AllCoursesStudent />
              ) : (
                <AllCoursesLecturer />
              )
            }
          ></Route>
          <Route
            path="/profile"
            element={role === "student" ? <Profile /> : <ProfileLecturer />}
          ></Route>

          <Route
            path="/course/:id"
            element={
              role === "student" ? <CoursePage /> : <CoursePageLecturer />
            }
          ></Route>
          <Route
            path="/exercise"
            element={role === "student" ? <Exercise /> : <ExerciseLecturer />}
          ></Route>

          <Route path="/lecturers" element={<Lecturers />}></Route>
        </Route>

        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
