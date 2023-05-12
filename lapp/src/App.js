import RequireAuth from "./components/RequireAuth.js";
import { Route, Routes } from "react-router-dom";
import {
  AllCoursesStudent,
  CoursePage,
  Exercise,
  Lecturers,
  ProfileStudentMe,
} from "./pages/Student";
import {
  AllCoursesLecturer,
  ProfileTeacherMe,
  CoursePage as CoursePageLecturer,
  ExerciseDetail as ExerciseLecturer,
} from "./pages/Lecturer";
import {
  Home,
  Errorpage,
  ProfileLecturer,
  ProfileStudent,
} from "./pages/common";
import { useAuth } from "./components/auth.js";
import { NavbarLecturer, NavbarStudent } from "./components/index.js";

function App() {
  const auth = useAuth();
  const role = auth.user?.role;
  const id = auth.user?._id;
  return (
    <div className="App bg-[#FFFAF0]">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route element={<RequireAuth />}>
          <Route
            element={
              role === "student" ? (
                <NavbarStudent></NavbarStudent>
              ) : (
                <NavbarLecturer></NavbarLecturer>
              )
            }
          >
            <Route path="/profile">
              <Route
                index
                element={
                  role === "student" ? (
                    <ProfileStudentMe id={id}></ProfileStudentMe>
                  ) : (
                    <ProfileTeacherMe id={id}></ProfileTeacherMe>
                  )
                }
              ></Route>
              <Route path="lecturer/:id" element={<ProfileLecturer />}></Route>
              <Route path="student/:id" element={<ProfileStudent />}></Route>
            </Route>
          </Route>
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
