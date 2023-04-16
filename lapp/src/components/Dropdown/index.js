import {useState} from "react";
function Dropdown(){
    const [active, setActive]=useState(0);
    const handleClick =() =>{
        if(active===0){
            setActive(1);
        }else{
            setActive(0);
        }
    }
    return (
        <div >
            <img src="/dropdown/more.svg" alt="" className="h-12 w-12 cursor-pointer"
               onClick={()=>handleClick()}></img>
            {active===0
            ? <div></div>
            : <div>
                <div className="w-40 h-24 border rounded-2xl">
                    <div className="flex flex-col ml-4 mt-3 space-y-2">
                        <div className="flex flex-row hover:text-[#B02B3B] cursor-pointer">
                            <img src="/dropdown/edit.png" alt="" className="w-5 h-5 mt-1"></img>
                            <div className="text-2xl ml-12">Edit</div>
                        </div>
                        <div className="flex flex-row mt-3 hover:text-[#B02B3B] cursor-pointer">
                            <img src="/dropdown/delete.png" alt="" className="w-5 h-5 mt-1"></img>
                            <div className="text-2xl ml-12">Delete</div>
                        </div>
                    </div>
                </div>
             </div>}
        
            
         </div>
    );
  };
  
  export default Dropdown;
  