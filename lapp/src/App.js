import RequireAuth from "./components/RequireAuth.js";
import { AuthProvider } from "./components/auth";
import {
  AllCoursesStudent,
  CoursePage,
  ExerciseDetail,
  JoinCourse,
  Lecturers,
  Profile,
} from "./pages/Student";
import { Login, Home } from "./pages/common";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className=" App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/allcourses"
              element={
                <RequireAuth>
                  <AllCoursesStudent />
                </RequireAuth>
              }></Route>
            <Route
              path="/exercise"
              element={
                <ExerciseDetail
                  exername={"Test"}
                  maxpoints={45}
                  duedate={"12/3/2022"}
                  // coursename={"Studey"}
                  // teacher={}
                />
              }></Route>
            <Route path="/lecturers" element={<Lecturers />}></Route>
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }></Route>
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
