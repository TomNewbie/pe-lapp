import { NavbarStudent,NavbarCourse,StudentCourseName,Notification,Footer} from "../../../components";
const CoursePage=()=>{
    return(
        <div className="flex flex-col space-y-8">
            <NavbarStudent></NavbarStudent>
            <StudentCourseName name={"Software Engineering"} teacher={"Tran Tuan Anh"}></StudentCourseName>
            <NavbarCourse>
                <Notification file={"no"}></Notification>
                <Notification file={"no"}></Notification>
                <Notification file={"true"}></Notification>
                <Notification file={"true"}></Notification>
            </NavbarCourse>
            <Footer></Footer>
        </div>
    );
};
export default CoursePage;