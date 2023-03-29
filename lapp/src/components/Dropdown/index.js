function Dropdown({px,py,option1,option2,option3}){
    const styleclass=`inline-flex w-full justify-center bg-[#CC6666]/50 px-${px} py-${py} rounded-lg text-bg-[#000000] rounded group`
    return (
        <div className="relative inline-block text-left">
            <div>
                <button class={styleclass}>
                    <p class="px-4">Dropdown menu</p>
                    <span class="border-l px-2 hover:bg-white">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox=" 0 0 24 24" xlmns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </span>
                    <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
                        <ul className="text-left border rounded">
                            <li className="px-4 py-1 hover:bg-[#CC6666]/20 border-b">{option1}</li>
                            <li className="px-4 py-1 hover:bg-[#CC6666]/20 border-b">{option2}</li>
                            <li className="px-4 py-1 hover:bg-[#CC6666]/20 border-b">{option3}</li>
                        </ul>
                    </div>
                </button>
            </div>
        </div>
    );
  };
  
  export default function Dropdown1({px,py,option1,option2,option3}){
    return <Dropdown px={2} py={2} option1="Option 1" option2="Option 2" option3="Option 3"></Dropdown>
  }
  