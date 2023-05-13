const Notification = ({ content }) => {
  if (!content) {
    return null;
  }
  const fileSection =
    content.files?.map((file) => (
      <a href={file.url}>
        <div className="flex px-2 py-3 border border-black rounded-2xl">
          <img src="/notification/upload.svg" alt="" className="w-9 h-9"></img>
          <div className="ml-3 text-3xl font-semibold">{file.name}</div>
        </div>
      </a>
    )) ?? [];
  return (
    <div className="bg-[#F4C2C2]/30 rounded-3xl w-full h-auto pt-4 pb-6">
      <div className="flex flex-col ml-4 space-y-4">
        <div className="text-5xl font-bold">{content.title}</div>
        <div className="text-3xl font-light">{content.body}</div>
        <div>
          {content.files && (
            <div>
              <div className="flex gap-3">{fileSection}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
