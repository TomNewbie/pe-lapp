const RecordTable = ({ data, deadline }) => {
  if (!data) {
    return null;
  }
  const convertDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp);

    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
    const hour = date.getHours();

    const formattedDate = `${month} ${day}, ${year} ${hour}:00`;

    return formattedDate;
  };

  const findStatus = (submit) => {
    const submitDate = new Date(submit);
    const deadlineDate = new Date(deadline);
    if (isNaN(submitDate.getTime())) {
      console.log(submitDate + "deadline: " + deadlineDate + "un");

      return "unsubmit";
    } else {
      if (submitDate > deadlineDate) {
        console.log(submitDate + "deadline: " + deadlineDate + "missing");

        return "missing";
      } else {
        console.log(submitDate + "deadline: " + deadlineDate + "ontime");

        return "ontime";
      }
    }
  };

  const index = data
    ? data.map((d) => {
        const submitConvert = convertDate(d.submit_time);
        const submittime = d.submit_time;
        const status = findStatus(submittime);
        return (
          <tr>
            <td class="px-8 py-2 border border-slate-300">{d.student.name}</td>
            <td class="px-6 py-4 border border-slate-300">{d.student.id}</td>
            <td class="px-6 py-4 border border-slate-300">{submitConvert}</td>
            <td
              class={
                status === "unsubmit"
                  ? "text-[#7F1734] text-center border border-slate-300"
                  : status === "ontime"
                  ? "px-6 py-4 text-center text-[#267c2d] border border-slate-300"
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
