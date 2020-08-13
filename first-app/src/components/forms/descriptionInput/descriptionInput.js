import React from "react";
import "./descriptionInput.scss";



const DescriptionInput= ({handleChange, label, ...otherProps}) =>{
    return (
        <div className="formRow"> 
            {label && (
                <label>
                    {label}
                </label>
            )}

            <textarea className="formInput" onChange={handleChange} value={otherProps.value} {...otherProps}>{otherProps.children}</textarea>
        </div>
    );
}
export default DescriptionInput;