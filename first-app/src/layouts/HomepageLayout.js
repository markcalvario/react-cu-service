import React from "react";
import Header from "../components/header/Header"

function HomepageLayout(props){
    return(
        <React.Fragment>
            <Header name="CU Service" {...props}/>
            
            {props.children}
            
        </React.Fragment>
    )
}

export default HomepageLayout;