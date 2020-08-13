import userBioTypes from "./userBio.types";

const INITIAL_STATE={
    bio: []
}

const userBioReducer= (state= INITIAL_STATE, action )=>{
    switch(action.type){
        case userBioTypes.SET_USER_BIO:
            return{
                ...state,
                bio: action.payload
            }

        default:
            return state;
    }
}

export default userBioReducer;