const RecordTable = ({ students }) => {
  const index = students
    ? students.map((student) => (
        <tr class="">
          <td class="px-6 py-4 text-center border border-slate-300 ">
            {student.name}
          </td>
          <td class="px-6 py-4 text-center border border-slate-300">
            {student.id}
          </td>
          <td class="px-6 py-4 text-center border border-slate-300">
            {student.submittime}
          </td>
          <td
            class={
              student.status === "on-time"
                ? "px-6 py-4 text-center text-[#1B1C1E] border border-slate-300"
                : student.status === "missing"
                ? "text-[#7F1734] text-center border border-slate-300"
                : "text-[#FBA70E] text-center border border-slate-300"
            }
          >
            {student.status}
          </td>
          <td class="px-2 py-2 text-center border border-slate-300">
            <div className="grid grid-cols-2 gap-2">
              {student.file ? (
                student.file.map((file) => (
                  <div>
                    <div className="flex px-3 py-2 mb-1 space-y-3 border border-black col rounded-2xl">
                      <img
                        src="/notification/upload.svg"
                        alt=""
                        className="mt-3 ml-4 w-9 h-9"
                      ></img>
                      <div className="ml-8 mr-4 text-3xl font-semibold">
                        {file}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div></div>
              )}
            </div>
          </td>
          <td class="px-6 py-4 text-center border border-slate-300">
            {student.grade ? <span>{student.grade}</span> : <span>N/A</span>}
          </td>
        </tr>
      ))
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
