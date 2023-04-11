import React from "react";
const StudentCourseName = ({name,teacher}) => {
    return(
      <div className="w-full h-40 mt-44"> 
        <div className="grid h-40 bg-cover bg-no-repeat"
          style={{backgroundImage: `url('../CourseName/student.png')`}}>
          <div className="text-5xl place-self-center h-8 mt-4">{name}</div>
          <div className="text-3xl place-self-center mb-4">{teacher}</div>
        </div> 
      </div>    
    );
  };
  
  export default StudentCourseName;
