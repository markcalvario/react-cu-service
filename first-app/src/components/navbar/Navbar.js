import React from "react";
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <Link to="/login">
                Login
            </Link>
            <Link to="/">
                Register
            </Link>
        </div>
    )
}

export default Navbar;