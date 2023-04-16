// import for General tab
import { NavbarStudent,StudentCourseName,Notification,Footer} from "../../../components";
import { StudentNavCourse} from "../../../components"
// import for Participants tab
import { Participants} from "../../../components";
// import for Exercise tab
import { ExerciseSection} from "../../../components";
const CoursePage=()=>{
    //General tab: Notification
    const Files1=[
        {name:"Probability"},
        {name:"Statistic"},
        {name:"B"},
        {name:"C"},
        {name:"D"},
    ];
    const Files2=[
        {name:"Probability"},
        {name:"Statistic"},
        {name:"B"},
        {name:"C"},
        
    ];
    const Files3=[]
    //Participants tab: Participants section
    const students = [
        { url: "/participants-icon/ava.png", name: "A", mail: "ava.gmail.com" },
        { url: "/participants-icon/ava.png", name: "B", mail: "ava1.gmail.com" },
        { url: "/participants-icon/ava.png", name: "C", mail: "ava2.gmail.com" },
      ];
    
console.log(Files1);
    return(
        // <body className="bg-[#FFFAF0]">
            <div className="flex flex-col space-y-8">
                <NavbarStudent></NavbarStudent>
                <StudentCourseName name={"Software Engineering"} teacher={"Tran Tuan Anh"}></StudentCourseName>
                <StudentNavCourse 
                // General tab
                tab1={
                <div className="flex flex-col space-y-6 mt-8 w-[1000px]">
                    <Notification status={"no"} title={"Announcement"} content={"Today we learn Bayes Rules, hope you like the lecture."} Files={Files3}></Notification>
                    <Notification status={"no"} title={"Announcement"} content={"asdfghjklasdfghjkdrftyu"} Files={Files3}></Notification>
                    <Notification status={"true"} title={"Probability"} content={"asdcvbnmmjjhggggggg"} Files={Files1}></Notification>
                    <Notification status={"true"} title={"Probability"} content={"asdcvbnmmjjhggggggg"} Files={Files2}></Notification>
                </div>} 
                // Participants tab
                tab2={<div className="flex flex-col space-y-6 mt-8 w-[800px]">
                    <Participants teacher={"Tran Tuan Anh"} students={students}></Participants></div>} 
                // Exercise tab
                tab3={<div className="flex flex-col space-y-6 mt-8 w-[1000px]">
                    <ExerciseSection 
                        name={"Exercise Name"}
                        deadline={"Monday, 15 February 2023, 12:00 AM"}
                        grade={"null"}
                        status={"undone"}
                    ></ExerciseSection>
                    <ExerciseSection 
                        name={"Exercise Name"}
                        deadline={"Monday, 15 February 2023, 12:00 AM"}
                        grade={"9"}
                        status={"done"}
                    ></ExerciseSection></div>}>
                    
                </StudentNavCourse>
                <Footer></Footer>
            </div>
        // </body>
    );
};
export default CoursePage;