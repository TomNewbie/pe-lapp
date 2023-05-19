import { Dropdown } from "../../components";
import { deleteCourseContent } from "../../services/course/content";
import { useAuth } from "../auth";

const Notification = ({
  content,
  courseId,
  onChangeContents,
  handleEditContent,
}) => {
  const auth = useAuth();
  const role = auth.user?.role;
  if (!content) {
    return null;
  }

  const onDelete = async () => {
    deleteCourseContent(courseId, content._id)
      .then(() => {
        // Handle successful deletion of course content
        alert("Course content deleted successfully.");
        onChangeContents();
      })
      .catch((error) => {
        // Handle error during course content deletion
        alert("Error deleting course content:" + error);
      });
  };
  const onEdit = () => {
    handleEditContent();
  };

  const fileSection =
    content.files?.map((file) => (
      <div key={file.url} className="flex-shrink-0">
        <a href={file.url} target="_blank" rel="noreferrer">
          <div className="flex px-2 py-3 border w-96 border-[#530619] rounded-2xl">
            <img src="/notification/upload.svg" alt="" className="w-9 h-9" />
            <div
              className="ml-3 text-3xl font-semibold truncate text-[#530619]"
              title={file.name}
            >
              {file.name}
            </div>
          </div>
        </a>
      </div>
    )) ?? [];

  return (
    <div className="bg-[#F4C2C2]/30 rounded-3xl w-full h-auto pt-4 pb-6 mb-8">
      {role === "lecturer" && (
        <div className="relative">
          <div className="absolute top-0 right-0">
            <Dropdown onDelete={onDelete} onEdit={onEdit} />
          </div>
        </div>
      )}
      <div className="flex flex-col ml-4 space-y-4">
        <div className="text-5xl font-bold">{content.title}</div>
        <div className="text-3xl font-light">{content.body}</div>
        {content.files && (
          <div className="flex flex-wrap gap-3">{fileSection}</div>
        )}
      </div>
    </div>
  );
};

export default Notification;
