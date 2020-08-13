import React from "react";
import "./dashboard.scss"

//components
import Profile from "../../components/profile/profile"


const Dashboard= props=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <Profile className="col-6"/>
                
            </div>
        </div>
    )
}

export default Dashboard;