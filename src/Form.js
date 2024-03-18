import React from "react";
import "./Form.css";

export default function Form() {
    return (
        <div className="Form">
         <form>
           <input type="search" placeholder="Enter a city..." className="field-search" autoFocus="on"/>
           <input type="Submit" value="Search" className="btn-search btn-primary " />
         </form>
        </div>  
    );
}
