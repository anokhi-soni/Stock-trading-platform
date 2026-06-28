import { useState } from "react";
import {Link} from "react-router-dom"
function CreateTicketSubCompo({id, icon, heading, linkList}) {
    const [isOpen, setIsOpen] = useState(false);
    function handleOnClick(event){
        setIsOpen(!isOpen);        
    }
    return ( 
        <div className="dropDownBars">
            <div className="bars" onClick={handleOnClick}>
                <div className="barIcon">{icon}</div>
                <div className="barHeading">{heading}</div>
                <div className="barDropDown"><i className="fa-solid fa-angle-down"></i></div>
            </div>
            <div style={{display: (isOpen)? "block" : "none"}} className="dropPlates" id={id}>
                <ul>
                    {linkList.map((link)=>(<li><Link to={"#"}>{link}</Link></li>))}
                </ul>
            </div>
        </div>
    );
}

export default CreateTicketSubCompo;