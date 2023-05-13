import { NavbarStudent, Footer } from "../../../components";
import { useAPI } from "../../../hooks/useAPI";
import React from "react";
import { Errorpage } from "../../common";
import { Link } from "react-router-dom";
/** Need to fetch:
 * lecturers: {
    name: string;
    faculty: string;
    mail: string;
    url: string;
}[]
 */

function copyToClipboard(email) {
  navigator.clipboard.writeText(email);
}

// Component renders a list of lecturers grouped by faculty, with each lecturer's name and email address.
const Lecturers = () => {
  const {
    data: lecturers1,
    pending,
    error,
  } = useAPI({ path: "/api/lecturers" });

  if (pending) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <Errorpage />;
  }
  const renderLecturerLists = () => {
    const facultySection = lecturers1.reduce((acc, lecturer) => {
      const faculty = lecturer.faculty || "Others";
      if (!acc[faculty]) {
        acc[faculty] = [lecturer];
      } else {
        acc[faculty].push(lecturer);
      }

      return acc;
    }, {});
    const faculties = Object.keys(facultySection);
    //Map over each faculty section and render the lecturers
    return Object.entries(facultySection).map(([key, val], index) => {
      return (
        <div key={index}>
          <div className="text-[#E36255] text-4xl mt-4 h-8 border-b border-black">
            {faculties[index]}
          </div>
          <div className="divide-y">
            {val.map((lecturer) => {
              const link = "/profile/lecturer/" + lecturer._id;
              return (
                <div
                  className="relative flex flex-row items-center h-16 text-xl"
                  key={lecturer._id + "@vgu.edu.vn"}
                >
                  <img
                    src={lecturer.avatar || "/ProfileTeacher/avatar.png"}
                    alt=""
                    className="w-8 h-8 mx-4 -my-5 rounded-full "
                  ></img>
                  <Link to={link}>
                    <div className="mx-4 ml-2 -my-2 text-2xl hover:underline">
                      {lecturer.name}
                    </div>
                  </Link>

                  <div>
                    <button onClick={() => copyToClipboard(lecturer.email)}>
                      <img
                        src="/participants-icon/mail.png"
                        alt=""
                        className="absolute w-5 h-5 mx-4 -my-5 right-4"
                      ></img>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <NavbarStudent></NavbarStudent>
      {pending && <div>Loading...</div>}
      {error && <Errorpage></Errorpage>}
      {lecturers1 && renderLecturerLists(lecturers1)}
      <div className="absolute inset-x-0 bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Lecturers;
