// import for General tab
import { NavbarLecturer,TeacherNavCourse,CreateCourse,Code,TeacherCourseName,Announce,Notification,Footer} from "../../../components";
// import for Participants tab
import { Participants} from "../../../components";
// import for Exercise tab
import { Assignment} from "../../../components";
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
                <NavbarLecturer></NavbarLecturer>
                <TeacherCourseName name={"Software Engineering"} semester={"Winter 2023"}></TeacherCourseName>
                <TeacherNavCourse 
                // General tab
                tab1={
                <div className="flex flex-row w-[1000px]">
                    <div className="flex flex-col space-y-6 mt-8">
                        <Announce></Announce>
                        <Notification status={"no"} title={"Announcement"} content={"Today we learn Bayes Rules, hope you like the lecture."} Files={Files3}></Notification>
                        <Notification status={"true"} title={"Probability"} content={"asdcvbnmmjjhggggggg"} Files={Files1}></Notification>
                        <Notification status={"true"} title={"Probability"} content={"asdcvbnmmjjhggggggg"} Files={Files2}></Notification>
                    </div>
                    <div><Code code={"12345"}></Code></div>
                </div>} 

                //Exercise tab
                tab2={
                    <div>
                        <CreateCourse></CreateCourse>
                        <div className="flex flex-col space-y-6 mt-8 w-[1000px]">
                        <Assignment></Assignment></div>
                    </div>}

                // Participants tab
                tab3={
                    <div className="flex flex-col space-y-6 mt-8 w-[800px]">
                        <Participants teacher={"Tran Tuan Anh"} students={students}></Participants></div>} 
                
                // Grade tab
                tab4={"tab content 4"}
                ></TeacherNavCourse>
                <Footer></Footer>
            </div>
        // </body>
    );
};
export default CoursePage;