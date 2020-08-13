import React from "react";
import "./editButton.scss";

const EditButton=(props)=>{
    return(
        <button className="editButton" onClick= {props.onClick}>{props.children}</button>
    )
}

export default EditButton;