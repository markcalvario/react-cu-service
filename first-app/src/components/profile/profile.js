import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./profile.scss";
import {useHistory} from "react-router-dom";
import UserDescription from "../../components/userDescription/userDescription";
import {auth} from "../../firebase/utils"

import {addBioStart, fetchUserBioStart} from "../../redux/userBio/userBio.actions"

//components
import EditButton from "../forms/editButton/editButton";
import DescriptionInput from "../forms/descriptionInput/descriptionInput"
import userBioTypes from "../../redux/userBio/userBio.types";
import { updateUserBio } from "../../redux/userBio/userBio.sagas";

const mapState = ({user, userBio}) => ({
    currentUser: user.currentUser,
    bio: userBio.bio
});



const Profile= (props)=>{
    const dispatch= useDispatch();
    const { currentUser, bio} = useSelector(mapState);
    
    const [showEditBio, setShowEditBio] = useState(false);
    const [bioDescription, setBioDescription]= useState('');

    useEffect(()=>{
        dispatch(
            fetchUserBioStart()
        );
    }, [])
    
    
    const handleSubmitForm=(e)=>{
        e.preventDefault();
        // if (bio.length===0){
            dispatch(
                addBioStart({
                    bioDescription
                })
            )
        // }else{
        //     dispatch(
        //         updateUserBio({
        //             bioDescription
        //         })
        //     )
        //     console.log('success')
        // }
        
        setShowEditBio(!showEditBio)
    }
    
    return( 
        <div className="col-3 profileColumn">
            <div className="profileOutline">
                <span class="material-icons defaultProfilePic">
                    account_circle
                </span>
    <h1 className="bioTitle">Bio</h1>
                <div className="bio">
                    <h6 className="displayName">{currentUser.displayName}</h6>    
                    {showEditBio &&(
                        <div>
                            <form onSubmit={handleSubmitForm}>
                                <DescriptionInput 
                                value={bioDescription} 
                                onChange={e=>setBioDescription(e.target.value)}>{bioDescription}</DescriptionInput>
                                <div className="editClearButton">
                                    <EditButton>Update</EditButton>
                                    <span class="material-icons exitIcon" onClick={()=>setShowEditBio(!showEditBio)}>
                                        clear
                                    </span>
                                </div>
                            </form>
                        </div> 
                    )}
                    {!showEditBio &&(
                        <div>
                            {bio.map((description,index)=>{
                                const {bioDescription}= description;
                                return(
                                    <p className="bioDescription" key={index}>{bioDescription}</p>
                                )
                            })}
                               
                            <div className="editClearButton">
                                <EditButton onClick={() => setShowEditBio(!showEditBio)}>Edit Bio</EditButton>
                            </div>
                        </div>
                    )}

                    
                </div>
                

                <UserDescription>
                    
                </UserDescription>
            </div>
        </div>
    )
}
export default Profile;