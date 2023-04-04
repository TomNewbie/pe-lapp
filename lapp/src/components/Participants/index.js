const Participants = () => {
    return(
        <div className="ml-40 max-w-full">
            <div className="flex flex-col">
                <div className="text-[#E36255] text-4xl h-8">TEACHERS</div>
                <div className="relative flex flex-row items-center w-10/12 h-16 border-t-2 border-black text-xl">
                    <img src="/participants-icon/ava.png" alt=""
                         className="absolute mx-4 my-5"></img>
                    <div className="absolute ml-20 text-2xl">Teacher 1</div>
                    <img src="/participants-icon/mail.png" alt=""
                         className="absolute right-4 h-5 w-5"></img>
                </div>
                <div className="text-[#E36255] text-4xl h-8">STUDENTS</div>
                <div>
                    <div className="relative flex flex-row items-center w-10/12 h-16 border-t-2 border-black text-xl">
                        <img src="/participants-icon/ava.png" alt=""
                            className="absolute mx-4 my-5"></img>
                        <div className="absolute ml-20 text-2xl">Student 1</div>
                        <img src="/participants-icon/mail.png" alt=""
                            className="absolute right-4 h-5 w-5"></img>
                    </div>
                </div>
                <div>
                    <div className="relative flex flex-row items-center w-10/12 h-16 border-t border-black text-xl">
                        <img src="/participants-icon/ava.png" alt=""
                            className="absolute mx-4 my-5"></img>
                        <div className="absolute ml-20 text-2xl">Student 2</div>
                        <img src="/participants-icon/mail.png" alt=""
                            className="absolute right-4 h-5 w-5"></img>
                    </div>
                </div>
                {/* more */}
            </div>
        </div>
    );
  };
  
  export default Participants;
  