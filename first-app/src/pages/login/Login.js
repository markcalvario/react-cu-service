import React,{ useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {Link, useHistory} from "react-router-dom";
import { emailSignInStart, googleSignInStart } from "../../redux/user/user.actions";

import "./login.scss";
import Buttons from "../../components/forms/button/Button";

import AuthWrapper from "../../components/authWrapper/AuthWrapper";
import FormInput from "../../components/forms/formInput/FormInput";

const mapState = ({ user }) =>({
    currentUser: user.currentUser
});

const Login = props => {

    const { currentUser } = useSelector(mapState);
    const dispatch = useDispatch();
    const history= useHistory();
    const [email, setEmail ]= useState('');
    const [password, setPassword ]= useState('');

    useEffect(()=>{
        if (currentUser){
            resetForm();
            history.push('/');
        }
    },[currentUser]);

    const resetForm= ()=> {
        setEmail('');
        setPassword('');
    }
    
    const handleSubmit= e=>{
        e.preventDefault();
        dispatch(emailSignInStart({email,password}));
    }

    const handleGoogleSignIn = ()=>{
        dispatch(googleSignInStart());
    }

    const configureWrapper={
        headline: "Login"
    }
        return(
            <AuthWrapper {...configureWrapper}>
                <div className="formWrap">
                    <form onSubmit={handleSubmit}>
                        <FormInput type="email" name="email" value={email} placeholder="Email"
                        handleChange={e=> setEmail(e.target.value)}
                        />
                        <FormInput type="password" name="password" value={password} placeholder="Password"
                        handleChange={e=> setPassword(e.target.value)}
                        />
                        <Buttons type="submit">
                            Login
                        </Buttons>

                        <div className="socialSignIn">
                            <div className="Row">
                                <Buttons onClick={handleGoogleSignIn}>
                                    Sign in with Google
                                </Buttons>
                            </div>
                        </div>
                        <div className="links">
                            <Link to="/recovery">
                                Reset Password
                            </Link>
                        </div>
                    </form>
                </div>
            </AuthWrapper>
        )
};


export default Login;