import { Dropdown } from "../../components";

const Notification = ({ content }) => {
  if (!content) {
    return null;
  }

  const fileSection =
    content.files?.map((file) => (
      <div key={file.url} className="relative flex-shrink-0">
        <a href={file.url}>
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
    <div className="bg-[#F4C2C2]/30 rounded-3xl w-full h-auto pt-4 pb-6 relative">
      <div className="flex flex-col ml-4 space-y-4">
        <div className="text-5xl font-bold">{content.title}</div>
        <div className="text-3xl font-light">{content.body}</div>
        {content.files && (
          <div className="flex flex-wrap gap-3">{fileSection}</div>
        )}
      </div>
      <div className="absolute top-0 right-0">
        <Dropdown />
      </div>
    </div>
  );
};

export default Notification;
