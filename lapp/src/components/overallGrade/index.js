import { Dropdown } from "../../components";
import { useAPI } from "../../hooks/useAPI";
import { usePage } from "../../hooks/usePage";

const OverallGrade = ({ courseId: id }) => {
  const { pageObj, nextPage, prevPage, page } = usePage({ size: 10 });
  const { data } = useAPI({
    path: "/api/course/:id/exercises/grade",
    params: { id },
    searchParams: pageObj,
  });

  const exercise = data?.exercises?.map?.((ex) => (
    <th className="py-3 border border-slate-300 bg-[#F4C2C2]/40 text-left pl-4 text-[30px]">
      <div className="relative flex flex-row">
        <div>
          <div className="text-[#9F5F5F]/80 font-light">{ex.duedate}</div>
          <div className="text-[#7F1734]">{ex.name}</div>
          <div className="text-[#9F5F5F]/80 font-light">___ out of 10</div>
        </div>
        <div className="absolute right-0 ">
          <Dropdown></Dropdown>
        </div>
      </div>
    </th>
  ));

  const index = data?.students?.map?.((student) => {
    const grades = student.grade.filter((g) => g !== null);
    return (
      <tr class="text-[30px]">
        <td className="py-4 text-center border border-slate-300 ">
          {student.name}
        </td>
        <td className="py-4 text-center border border-slate-300 ">
          {student.id}
        </td>
        <td className="py-4 text-center border border-slate-300">
          {grades.reduce((a, e) => {
            return a + e;
          }, 0) / grades.length}
        </td>
        <td className="py-4 text-center border border-slate-300">
          {grades.length}
        </td>
        {student.grade.map((grade) => {
          return (
            <td className="py-4 text-center border border-slate-300">
              {grade ?? NaN}
            </td>
          );
        })}
      </tr>
    );
  });

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

        {/* Pagination */}
        <button onClick={prevPage} disabled={page === 1}>
          {"<"}
        </button>
        {page}
        <button onClick={nextPage}>{">"}</button>
      </div>
    </div>
  );
};

export default OverallGrade;
