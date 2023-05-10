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
  const facultySection = lecturers.reduce((acc, lecturer) => {
    if (!acc[lecturer.faculty]) {
      acc[lecturer.faculty] = [lecturer];
    } else {
      acc[lecturer.faculty].push(lecturer);
    }
    return acc;
  }, {});
  const faculties = Object.keys(facultySection);
  console.log(facultySection);
  // Map over each faculty section and render the lecturers
  const LecturerSection = Object.entries(facultySection).map(
    ([key, val], index) => (
      <div key={index}>
        <div className="text-[#E36255] text-4xl h-8 border-b border-black">
          {faculties[index]}
        </div>
        <div className="divide-y">
          {val.map((lecturer) => (
            <div
              className="relative flex flex-row items-center h-16 text-xl"
              key={lecturer.mail}
            >
              <img
                src={lecturer.url}
                alt=""
                className="absolute mx-4 my-5"
              ></img>
              <div className="absolute ml-20 text-2xl">{lecturer.name}</div>
              <div>
                <button onClick={() => copyToClipboard(lecturer.mail)}>
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

      <div>{LecturerSection}</div>
      <div className="absolute inset-x-0 bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Lecturers;
