import React from "react";
const StudentCourseName = () => {
    return(
      <div className="w-full h-40 mt-44"> 
        <div className="grid h-40 bg-cover bg-no-repeat"
          style={{backgroundImage: `url('../CourseName/student.png')`}}>
          <div className="text-5xl place-self-center h-8 mt-4">COURSE NAME</div>
          <div className="text-3xl place-self-center mb-4">Teacher</div>
        </div> 
      </div>    
    );
  };
  
  export default StudentCourseName;
