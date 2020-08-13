import {firestore} from "../../firebase/utils";

export const handleAddBio= (bio)=>{
    return new Promise((resolve,reject)=>{
        firestore
            .collection('userBio')
            .doc()
            .set(bio)
            .then(()=>{
                resolve();
            })
            .catch((error)=>{
                reject(error);
            })
    });
}

export const handleUpdateBio= (auth, bio)=>{
    return new Promise((resolve,reject)=>{
        firestore
        .collection('userBio')
        .doc(`/
        T4ktsaYKRpkG0240Ds8t
        `)
        .update(bio)
        .then(()=>{
            resolve();
        })
        .catch((error)=>{
            reject(error);
        })
    })
}

export const handleFetchBio= ()=>{
    return new Promise((resolve, reject)=>{
        firestore
            .collection('userBio')
            .get()
            .then(snapshot => {
                const userBioArray= snapshot.docs.map(doc => {
                    return{
                        ...doc.data(),
                        documentID: doc.id
                    }
                });
            resolve(userBioArray);
        })
        .catch(error=>{
            reject(error);
        })
    })
}