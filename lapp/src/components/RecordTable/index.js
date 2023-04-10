const RecordTable = ({ Name, id, submittime, file, grade, status }) => {
  return (
    <div class="flex flex-col h-screen">
      <div class="flex-grow overflow-auto">
        <table class="relative w-full border-collapse border border-slate-500 ">
          <thead>
            <tr>
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
          <tbody class="divide-y">
            <tr>
              <td class="px-6 py-4 text-center border border-slate-300">
                {Name}
              </td>
              <td class="px-6 py-4 text-center border border-slate-300">
                {id}
              </td>
              <td class="px-6 py-4 text-center border border-slate-300">
                {submittime}
              </td>
              <td
                class={
                  status === "on-time"
                    ? "px-6 py-4 text-center text-[#1B1C1E] border border-slate-300"
                    : status === "missing"
                    ? "text-[#7F1734]"
                    : "text-[#FBA70E]"
                }>
                {status}
              </td>
              <td class="px-6 py-4 text-center border border-slate-300">
                {file}
              </td>
              <td class="px-6 py-4 text-center border border-slate-300">
                {grade}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordTable;
