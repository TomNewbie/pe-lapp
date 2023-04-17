const OverallGrade = ({ students, exercises}) => {
    const exercise = exercises.map((ex)=>(
        <th className="sticky top-0 px-6 py-3 border border-slate-300 bg-[#F4C2C2]/40">
            <div className="text-[#9F5F5F]/60 font-light text-sm">
                {ex.duedate}  
            </div>
            <div className="text-[#7F1734] ">
                {ex.exName}
            </div>
            <div className="text-[#9F5F5F]/60 font-light text-sm">___ out of 10</div>
        </th>
    ));
    console.log(exercises)
    const index = students
      ? students.map((student) => (
          <tr class="">
            <td className="py-4 text-center border border-slate-300 ">
              {student.name}
            </td>
            <td className="py-4 text-center border border-slate-300 ">
              {student.id}
            </td>
            <td className="py-4 text-center border border-slate-300">
              {student.overallGrade}
            </td>
            <td className="py-4 text-center border border-slate-300">
              {student.total}
            </td>
            <td className="py-4 text-center border border-slate-300">
              8
            </td>
          </tr>
        ))
      : null;
      console.log(students)
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
                  Overall Grade
                </th>
                <th class="sticky top-0 px-6 py-3 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40">
                  Exercises done
                </th>
                {/* <th class="sticky top-0 px-6 py-3 border border-slate-300 text-[#7F1734] bg-[#F4C2C2]/40"> */}
                  {exercise}
                {/* </th> */}
              </tr>
            </thead>
            <tbody class="divide-y">{index}</tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default OverallGrade;
  