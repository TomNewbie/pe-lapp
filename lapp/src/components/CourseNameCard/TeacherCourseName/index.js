import React from "react";
const TeacherCourseName = () => {
    return(
      <div className="w-full h-40 mt-44"> 
        <div className="grid h-40 bg-cover bg-no-repeat"
          style={{backgroundImage: `url('../CourseName/teacher.png')`}}>
          <div className="text-5xl place-self-center h-8 mt-4">COURSE NAME</div>
          <div className="text-3xl place-self-center mb-4">Semester</div>
        </div> 
      </div>    
    );
  };
  
  export default TeacherCourseName;
