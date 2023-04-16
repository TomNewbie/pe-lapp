const RecordTable = ({ students }) => {
  const index = students
    ? students.map((student) => (
        <tr class="">
          <td class="px-6 py-4 text-center border border-slate-300 ">
            {student.Name}
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
            <div className="flex flex-row gap-2">
              {student.file ? (
                student.file.map((file) => (
                  <div>
                    <div className="flex w-40 h-16 mb-1 space-y-3 border border-black col rounded-2xl">
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
            {student.grade}
          </td>
        </tr>
      ))
    : null;
  return (
    <div class="flex flex-col h-screen">
      <div class="flex-grow overflow-auto">
        <table class="relative w-full border-collapse border border-slate-500 ">
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
