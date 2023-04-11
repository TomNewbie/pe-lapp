const Notification = ({file}) => {

    return (
      <div className="bg-[#F4C2C2]/30 rounded-3xl w-10/12 h-auto pt-4 pb-6">
        <div className="flex flex-col space-y-4 ml-4">
            <div className="text-5xl font-bold">Probability</div>
            <div className="text-3xl font-light">Text content</div>
            <div>
                {file==="true" 
                ? <div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex col border border-black rounded-2xl w-fit h-16 space-y-3">
                            <img src="/notification/upload.svg" alt=""
                                className="ml-4 mt-3 w-9 h-9"></img>
                            <div className="ml-8 text-3xl font-semibold mr-4">Probability</div>
                        </div>

                        <div className="flex flex col border border-black rounded-2xl w-fit h-16 space-y-3">
                            <img src="/notification/upload.svg" alt=""
                                className="ml-4 mt-3 w-9 h-9"></img>
                            <div className="ml-8 text-3xl font-semibold mr-4">Probability</div>
                        </div>

                        <div className="flex flex col border border-black rounded-2xl w-fit h-16 space-y-3">
                            <img src="/notification/upload.svg" alt=""
                                className="ml-4 mt-3 w-9 h-9"></img>
                            <div className="ml-8 text-3xl font-semibold mr-4">Probability</div>
                        </div>

                        <div className="flex flex col border border-black rounded-2xl w-fit h-16 space-y-3">
                            <img src="/notification/upload.svg" alt=""
                                className="ml-4 mt-3 w-9 h-9"></img>
                            <div className="ml-8 text-3xl font-semibold mr-4">Probability</div>
                        </div>
                    </div>
                </div>
                : <div></div>}
                
            </div>
        </div>
      </div>
    );
  };
  
  export default Notification;