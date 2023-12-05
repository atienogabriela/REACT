import { useState} from "react";
const Projects = ({title,body}) => {
const[isOpen, setIsOpen]=useState (true);
    return ( 
    <div className="accordion">
    <div onClick={()=> setIsOpen(!isOpen)} className="accordion-header">
        <h2>{title}</h2>
        <div className="accordion-indicator">
            {isOpen ? '+' : '-'}
        </div>
         </div>
         {isOpen && (
    <div className="accordion-body">{body}</div>) }
        </div>
     );
}
 
export default Projects;