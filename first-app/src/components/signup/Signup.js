import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import {signUpUserStart} from "../../redux/user/user.actions"
import "./signup.scss" 


import AuthWrapper from "../../components/authWrapper/AuthWrapper";
import FormInput from "../forms/formInput/FormInput"
import Button from "../forms/button/Button"

const mapState = ({user}) => ({
    currentUser: user.currentUser,
    userError: user.userError,
});

const Signup = (props)=> {
    const dispatch = useDispatch();
    const history= useHistory();
    const {currentUser, userError} = useSelector(mapState)
    const [displayName, setDisplayName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');
    const [errors, setErrors]= useState([]);

    useEffect(()=>{
        if(currentUser){
            reset();
            history.push('/');
        }
    },[currentUser]);

    useEffect(()=>{
        if(Array.isArray(userError) && userError.length>0){
            setErrors(userError)
        }
    },[userError]);

    const reset=()=>{
        setDisplayName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setErrors([])
    }
    const handleFormSubmit = event =>{
        event.preventDefault();
        dispatch(signUpUserStart ({
            displayName,
            email,
            password,
            confirmPassword
        }))
    }
    
    
    
    const configAuthWrapper={
        headline: "Registration"
    }
    return (
        <AuthWrapper {...configAuthWrapper}>

            <div className="formWrap">
                {errors.length>0 && (
                    <ul>
                        {errors.map((err,index)=> {
                            return (
                                <li key={index}>
                                    {err}
                                </li>
                            );
                        })}
                    </ul>
                )}      
                <form onSubmit={handleFormSubmit}>
                    <FormInput
                        type="text" name="displayName" value={displayName} placeholder="Full Name"
                        handleChange={e=> setDisplayName(e.target.value)}
                    />
                    <FormInput
                        type="email" name="email" value={email} placeholder="Email"
                        handleChange={e=> setEmail(e.target.value)}
                    />
                    <FormInput
                        type="password" name="password" value={password} placeholder="Password"
                        handleChange={e=> setPassword(e.target.value)}
                    />
                    <FormInput
                        type="password" name="confirmPassword" value={confirmPassword} placeholder="Confirm Password"
                        handleChange={e=> setConfirmPassword(e.target.value)}
                    />
                    <Button type="submit">
                        Register
                    </Button>
                </form>
            </div>
        </AuthWrapper>
    )

}
export default Signup;