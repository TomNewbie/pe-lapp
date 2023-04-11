import {useState} from "react";
function Dropdown(){
    const [active, setActive]=useState(0);
    return (
        <div className={active===0
            ? ""
            : <div>
                <div>
                    
                </div>
            </div>}
        >
            <img src="/dropdown/more.svg" alt="" className="h-12 w-12 cursor-pointer"
                onClick={()=>setActive(1)}></img>
         </div>
    );
  };
  
  export default Dropdown;
  