import { NavbarStudent,NavbarCourse,StudentCourseName,Notification,Footer} from "../../../components";
const CoursePage=()=>{
    const Files1=[
        {name:"Probability"},
        {name:"Statistic"},
        {name:"B"},
        {name:"C"},
        {name:"D"}
      ]
    const Files2=[
        {name:"Probability"},
        {name:"Statistic"},
        {name:"B"},
        {name:"C"},
        
        ]
console.log(Files1);
    return(
        <div className="flex flex-col space-y-8 bg-[#FFFAF0]">
            <NavbarStudent></NavbarStudent>
            <StudentCourseName name={"Software Engineering"} teacher={"Tran Tuan Anh"}></StudentCourseName>
            {/* <NavbarCourse tab1={<div><Notification status={"no"} title={"Announcement"} content={"Today we learn Bayes Rules, hope you like the lecture."} Files={""}></Notification>
                <Notification status={"no"} title={"Announcement"} content={"asdfghjklasdfghjkdrftyu"} Files={""}></Notification>
                <Notification status={"true"} title={"Probability"} content={"asdcvbnmmjjhggggggg"} Files={Files1}></Notification>
                <Notification status={"true"} title={"Probability"} content={"asdcvbnmmjjhggggggg"} Files={Files2}></Notification></div>} tab2={"content2"} tab3={"content3"}>
                
            </NavbarCourse> */}
            <Footer></Footer>
        </div>
    );
};
export default CoursePage;