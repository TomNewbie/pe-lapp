const Assignment = () => {
  return (
    <div class="w-full h-fit text-[#1B1C1E] divide-y divide-[#808080]/30 text-2xl">
      <div class="flex flex-row justify-between px-2.5 py-2">
        <div class="flex flex-row place-items-center space-x-10">
          <img class="w-7 h-7" src="/Assignment/AssignmentIcon.png" alt="" />
          <div>
            <button class="hover:text-bold hover:text-[#560319] hover:underline">
              Assignment 1
            </button>
            <p>5/40 submissions</p>
          </div>
        </div>

        <div class="flex flex-row place-items-center space-x-14">
          <p>Due date: 31/02/2023</p>
          <div class="flex flex-row place-items-center space-x-8">
            {/* <img class="w-4 h-4" src="/Assignment/Expand.png" alt="" /> */}
            <img class="w-4 h-4" src="/Assignment/More.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
