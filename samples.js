import { useState} from "react";
const Samples = () => {
    const[isOpen, setIsOpen]=useState (true);
    return(
<div className="accordion">
    <div onClick={()=> setIsOpen(!isOpen)} className="accordion-header">
        <h2>hello</h2>
        <div className="accordion-indicator">
            {isOpen ? '+' : '-'}
        </div>
         </div>
         {isOpen && (
    <div className="accordion-body">hallelujah</div>) }
</div>
    )  
};
    
export default Samples;