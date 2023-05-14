import { Dropdown } from "../../components";
const OverallGrade = ({ students, exercises }) => {
  const exercise = exercises.map((ex) => (
    <th className="py-3 border border-slate-300 bg-[#F4C2C2]/40 text-left pl-4 text-[30px]">
      <div className="relative flex flex-row">
        <div>
          <div className="text-[#9F5F5F]/80 font-light">{ex.duedate}</div>
          <div className="text-[#7F1734]">{ex.exName}</div>
          <div className="text-[#9F5F5F]/80 font-light">___ out of 10</div>
        </div>
        <div className="absolute right-0 ">
          <Dropdown></Dropdown>
        </div>
      </div>
    </th>
  ));
  const index = students
    ? students.map((student) => (
        <tr class="text-[30px]">
          <td className="py-4 text-center border border-slate-300 ">
            {student.name}
          </td>
          <td className="py-4 text-center border border-slate-300 ">
            {student.id}
          </td>
          <td className="py-4 text-center border border-slate-300">
            {student.detailGrade.reduce((a, e) => {
              return a + e;
            }, 0) / student.detailGrade.length}
          </td>
          <td className="py-4 text-center border border-slate-300">
            {student.total}
          </td>
          {student.detailGrade.map((grade) => {
            return (
              <td className="py-4 text-center border border-slate-300">
                {grade}
              </td>
            );
          })}
        </tr>
      ))
    : null;
  return (
    <div class="flex flex-col">
      <div class="flex-grow overflow-auto">
        <table class="relative w-full border-collapse border  ">
          <thead>
            <tr class="h-full">
              <th class="px-4 py-3 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40 text-[35px]">
                Name
              </th>
              <th class="px-4 py-3 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40 text-[35px]">
                ID
              </th>
              <th class="py-4 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40 text-[35px]">
                Overall Grade
              </th>
              <th class="px-4 py-3 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40 text-[35px]">
                Exercises done
              </th>
              {exercise}
            </tr>
          </thead>
          <tbody class="divide-y">{index}</tbody>
        </table>
      </div>
    </div>
  );
};

export default OverallGrade;
