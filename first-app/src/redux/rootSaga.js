import {all, call} from "redux-saga/effects";
import userSagas from "./user/user.sagas"
import userBioSagas from "./userBio/userBio.sagas"

export default function* rootSaga(){
    yield all([
        call(userSagas),
        call(userBioSagas)
    ])
};