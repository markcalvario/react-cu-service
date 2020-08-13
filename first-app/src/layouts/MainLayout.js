import React from "react";
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

function MainLayout(props){
    return(
        <div className="fullHeight">
            <Header name="CU Service" {...props}/>
            <div className="main">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout;