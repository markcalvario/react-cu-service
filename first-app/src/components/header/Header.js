import React from "react"
import {Link} from "react-router-dom"
import "./Header.scss"

import { useSelector, useDispatch } from "react-redux"
import { signOutUserStart } from "../../redux/user/user.actions"

const mapState = ({user}) =>({
    currentUser: user.currentUser
});

function Header(props){
    const dispatch= useDispatch();
    const {currentUser} = useSelector(mapState);
    const signOut = ()=>{
        dispatch(signOutUserStart())
    };
    return(
        <header className="header">
            <Link to="/">
                <span>{props.name}</span>
            </Link>
            {/* <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            
                {currentUser &&(
                    <div>
                        <Link to="/dashboard">
                            My Account 
                        </Link>
                        <Link onClick={()=> signOut()}>
                            Logout
                        </Link>
                    </div>
                )}
                {!currentUser &&(
                    <div>
                        <Link to="/login">
                           Login
                        </Link>
                        <Link to="/register">
                           Register
                        </Link>
                    </div>
                )}
                
            
        </header>
    )
}

Header.defaultProps= {
    currentUser: null
};

export default Header;