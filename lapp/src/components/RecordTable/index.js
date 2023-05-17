const RecordTable = ({ data, deadline }) => {
  if (!data) {
    return null;
  }
  const findStatus = () => {
    const submitDate = new Date(data.submit_time);
    const deadlineDate = new Date(deadline);
    if (submitDate > deadlineDate || !submitDate) {
      return "missing";
    } else {
      return "ontime";
    }
  };
  const convertDate = (timestamp) => {
    const date = new Date(timestamp);

    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    const hour = date.getHours();

    const formattedDate = `${month} ${year} ${hour}:00`;

    return formattedDate;
  };

  const status = findStatus();
  const index = data
    ? data.map((d) => {
        const submittime = convertDate(d.submit_time);
        return (
          <tr>
            <td class="px-8 py-2 border border-slate-300">{d.student.name}</td>
            <td class="px-6 py-4 border border-slate-300">{d.student.id}</td>
            <td class="px-6 py-4 border border-slate-300">{submittime}</td>
            <td
              class={
                status === "on-time"
                  ? "px-6 py-4 text-center text-[#1B1C1E] border border-slate-300"
                  : status === "missing"
                  ? "text-[#7F1734] text-center border border-slate-300"
                  : "text-[#FBA70E] text-center border border-slate-300"
              }
            >
              {status}
            </td>
            <td class="px-2 py-2  border border-slate-300">
              <div>
                {d.file ? (
                  d.file.map((file, index) => (
                    <div key={index}>
                      <a href={file.url}>
                        <div className="flex px-3 py-2 mb-1 border border-black col rounded-2xl">
                          <img
                            src="/notification/upload.svg"
                            alt=""
                            className="w-9 h-9"
                          ></img>
                          <div className="ml-8 mr-4 text-3xl font-semibold">
                            {file.name}
                          </div>
                        </div>
                      </a>
                    </div>
                  ))
                ) : (
                  <div></div>
                )}
              </div>
            </td>
            <td class="px-6 py-4 text-center border border-slate-300">
              {d.grade ? <span>{d.grade}</span> : <span>N/A</span>}
            </td>
          </tr>
        );
      })
    : null;
  return (
    <div class="flex flex-col h-full pb-2 px-10 text-[30px] ">
      <div class="flex-grow overflow-auto">
        <table class="relative w-full border-collapse border border-slate-500">
          <thead>
            <tr class="h-fit">
              <th class="sticky top-0 px-6 py-3 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40">
                Name
              </th>
              <th class="sticky top-0 px-6 py-3 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40">
                ID
              </th>
              <th class="sticky top-0 px-6 py-3 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40">
                Submit time
              </th>
              <th class="sticky top-0 px-6 py-3 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40">
                Status
              </th>

              <th class="sticky top-0 px-6 py-3 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40">
                File
              </th>
              <th class="sticky top-0 px-6 py-3 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40">
                Grade
              </th>
            </tr>
          </thead>
          <tbody class="divide-y">{index}</tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordTable;
