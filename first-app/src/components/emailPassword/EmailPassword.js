import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom";
import { resetPasswordStart, resetUserState} from "../../redux/user/user.actions"
import "./emailPassword.scss";

import AuthWrapper from "../authWrapper/AuthWrapper";
import FormInput from "../forms/formInput/FormInput";
import Buttons from "../forms/button/Button";

const mapState= ({user})=>({
   resetPasswordSuccess: user.resetPasswordSuccess,
   userError: user.userError
})

const EmailPassword = (props) => {
    const dispatch= useDispatch();
    const history= useHistory();
    const {resetPasswordSuccess, userError} = useSelector(mapState);
    const [email, setEmail]= useState('');
    const [errors, setErrors]= useState([]);

    useEffect(()=>{
        if(resetPasswordSuccess){
            dispatch(resetUserState());
            history.push('/login');
        } 
    },[resetPasswordSuccess])

    useEffect(()=>{
        if(Array.isArray(userError) && userError.length>0){
            setErrors(userError);
        }
    },[userError ])


    const handleSubmit= (e)=>{
        e.preventDefault();
        dispatch(resetPasswordStart({email}));
 
    }
    const configAuthWrapper={
        headline: "Email Password"
    }

    return(
        <AuthWrapper {...configAuthWrapper}>
            <div className="formWrap">

                {errors.length >0 && (
                    <ul>
                        {errors.map((error, index)=>{
                            return(
                                <li key={index}>
                                    {error}
                                </li>
                            )
                        })}
                    </ul>
                )}

                <form onSubmit={handleSubmit}>
                    <FormInput 
                        type="email"
                        name="email" 
                        value={email}
                        placeholder="Email" 
                        handleChange={e=> setEmail(e.target.value)}
                    />

                    <Buttons type="submit">
                        Email Password
                    </Buttons>
                    
                </form>
            </div>
        </AuthWrapper>
    )

}
export default EmailPassword;