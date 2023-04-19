import RequireAuth from "./components/RequireAuth.js";
import { AuthProvider, useAuth } from "./components/auth";
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
} from "./pages/Lecturer";
import { Login, Home, Errorpage } from "./pages/common";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const role = "student";
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
                role === "student" ? (
                  <RequireAuth>
                    <AllCoursesStudent />
                  </RequireAuth>
                ) : (
                  <RequireAuth>
                    <AllCoursesLecturer />
                  </RequireAuth>
                )
              }
            ></Route>
            <Route
              path="/course/:id"
              element={
                role === "student" ? (
                  <RequireAuth>
                    <CoursePage />
                  </RequireAuth>
                ) : (
                  <RequireAuth>
                    <CoursePageLecturer />
                  </RequireAuth>
                )
              }
            ></Route>
            <Route path="/exercise" element={<Exercise />}></Route>

            <Route path="/lecturers" element={<Lecturers />}></Route>
            <Route
              path="/profile"
              element={
                role === "student" ? (
                  <RequireAuth>
                    <Profile />
                  </RequireAuth>
                ) : (
                  <RequireAuth>
                    <ProfileLecturer />
                  </RequireAuth>
                )
              }
            ></Route>
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
