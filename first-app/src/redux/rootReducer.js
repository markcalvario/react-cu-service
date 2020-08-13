import {combineReducers} from "redux";
import UserReducer from "./user/user.reducer";
import userBioReducer from "./userBio/userBio.reducer";


export default combineReducers({
    user: UserReducer,
    userBio: userBioReducer
});