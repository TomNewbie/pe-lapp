import RequireAuth from "./components/RequireAuth.js";
import { AuthProvider } from "./components/auth";
import {
  AllCoursesStudent,
  CoursePage,
  ExerciseDetail,
  Lecturers,
  Profile,
} from "./pages/Student";
import { Login, Home, Errorpage } from "./pages/common";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const lecturers = [
    {
      name: "a",
      faculty: "cse",
      mail: "sd@vgu.edu.vn",
      url: "/participants-icon/ava.png",
    },
    {
      name: "b",
      faculty: "ba",
      mail: "sd1@vgu.edu.vn",
      url: "/participants-icon/ava.png",
    },
    {
      name: "c",
      faculty: "cse",
      mail: "sd2@vgu.edu.vn",
      url: "/participants-icon/ava.png",
    },
    {
      name: "d",
      faculty: "ba",
      mail: "s@vgu.edu.vn",
      url: "/participants-icon/ava.png",
    },
    {
      name: "e",
      faculty: "ece",
      mail: "s3d@vgu.edu.vn",
      url: "/participants-icon/ava.png",
    },
  ];
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
              }
            ></Route>
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
              }
            ></Route>
            <Route
              path="/lecturers"
              element={<Lecturers lecturers={lecturers} />}
            ></Route>
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile
                    name={"Le Hoang Kim Thanh"}
                    id={18047}
                    email={"18047@studen.vgu.edu"}
                  />
                </RequireAuth>
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
