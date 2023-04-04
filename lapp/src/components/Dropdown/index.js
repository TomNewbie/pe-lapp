const Dropdown = () => {
    return (
        <div className="relative inline-block text-left">
            <div>
                <button class="inline-flex w-full justify-center bg-white border focus:outline-non shadow text-stone-900 rounded focus:ring ring-gray-200 group">
                    <p class="px-4">Dropdown menu</p>
                    <span class="border-l px-2 hover:bg-gray-200">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox=" 0 0 24 24" xlmns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </span>
                    <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
                        <ul className="text-left border rounded">
                            <li className="px-4 py-1 hover:bg-gray-200 border-b">Option 1</li>
                            <li className="px-4 py-1 hover:bg-gray-200 border-b">Option 2</li>
                            <li className="px-4 py-1 hover:bg-gray-200 border-b">Option 3</li>
                        </ul>
                    </div>
                </button>
            </div>
        </div>
    );
  };
  
  export default Dropdown;
  