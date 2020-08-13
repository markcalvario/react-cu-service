import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import {firebaseConfig} from "./config";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
//db
export const firestore= firebase.firestore();


// const database= firebase.database();

// database.collection('userBio').doc(`
// qiTSYeSCQwXEFCUZu5su/bioDescription`).set('hola');

// firebase.ref('/userBio').doc('/qiTSYeSCQwXEFCUZu5su/bioDescription').update('hola');


export const GoogleProvider= new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({prompt:'select_account'});
// export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);



export const handleUserProfile= async({userAuth, additionalData} ) => {
    if (!userAuth){
        return
    }
    const {uid} = userAuth;
    const userRef = firestore.doc(`users/${uid}`);
    const snapshot= await userRef.get();
    if (!snapshot.exists){
        const { displayName,email }= userAuth;
        const timestamp= new Date();
        const userRoles= ['user'];
        try{
            await userRef.set({
                displayName,
                email,
                createdDate: timestamp,
                userRoles,
                ...additionalData
            }); 
        }catch(err){
            console.log(err)
        }
    }
    return userRef;
};

export const getCurrentUser = () =>{
    return new Promise((resolve,reject)=>{
        const unsubscribe = auth.onAuthStateChanged(userAuth=>{
            unsubscribe();
            resolve(userAuth);
        },reject);

    })
}