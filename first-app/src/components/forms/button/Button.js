import React from "react";
import "./buttons.scss";

function Buttons({children, ...otherProps}){
    return (
        <button className="btn" {...otherProps}>
            {children}
        </button>
    )
}

export default Buttons;