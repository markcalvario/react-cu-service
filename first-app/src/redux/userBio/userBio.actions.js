import userBioTypes from "./userBio.types";

export const addBioStart= userBio=>({
    type: userBioTypes.ADD_NEW_USER_BIO_START,
    payload: userBio
})

export const fetchUserBioStart= ()=>({
    type: userBioTypes.FETCH_USER_BIO_START
})

export const setUserBio = (bio)=>({
    type: userBioTypes.SET_USER_BIO,
    payload: bio
})

export const updateUserBioStart= (bio)=>({
    type: userBioTypes.UPDATE_USER_BIO_START,
    payload: bio
})

