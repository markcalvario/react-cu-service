import {takeLatest, put, all, call } from "redux-saga/effects";
import userBioTypes from "./userBio.types"
import {handleAddBio, handleFetchBio, handleUpdateBio} from "./userBio.helpers";
import {auth} from "../../firebase/utils"
import {setUserBio} from "../userBio/userBio.actions"



export function* updateUserBio({payload: {
    bioDescription
}}) {
    try{
        yield handleUpdateBio((auth.currentUser.uid, bioDescription));

    }catch(error){
        console.log(error)
    }
}

export function* onUpdateUserBio(){
    yield takeLatest(userBioTypes.UPDATE_USER_BIO_START, updateUserBio);
}

export function* addBio({payload: {
    bioDescription
}}) {
    try{
        const timestamp= new Date();
        yield handleAddBio({
            UID: auth.currentUser.uid,
            createdDate: timestamp,
            bioDescription
        })
    }catch(error){
        // console.log(error)
    }
}

export function* onAddBioStart(){
    yield takeLatest(userBioTypes.ADD_NEW_USER_BIO_START, addBio )
}

export function* fetchBio(){
    try{
        const userBio= yield handleFetchBio(); 
        yield put(
            setUserBio(userBio)
        )
    }catch(error){
        // console.log(error);
    }
}

export function* onFetchUserBioStart(){
    yield takeLatest(userBioTypes.FETCH_USER_BIO_START, fetchBio )
}

export default function* userBioSagas(){
    yield all([
        call(onAddBioStart),
        call(onFetchUserBioStart),
        call(onUpdateUserBio)
    ])
}