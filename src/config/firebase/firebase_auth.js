import { createUserWithEmailAndPassword,updateProfile,signInWithPopup,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import {getDoc,doc} from 'firebase/firestore'
import { db } from "./firebase";
 

export const registerWithFirebase = async (email,password) => {

    const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    )

    await updateProfile(userCredentials.user,{
        displayName:userCredentials.user.email
    })
    
    console.log("userCredentials",userCredentials)

    return userCredentials.user

} 

export const loginInWithFirebase = async (email,password) => {
    try{

        // Authenticate user email and password
        const result = await signInWithEmailAndPassword(auth,email,password)

        // authenticated user
        const user = result.user

        // Restore docs from firestore
        const userDoc = await getDoc(
           doc(db,'users',user.uid)
        )

        if(!userDoc.exists()){
            throw new Error("User metadata does not exists.")
        }

        // Get stored salt from firebase database
        const salt = userDoc.data().salt
        console.log("SALT:",salt)

        return {
            user,
            salt
        }
    }
    catch(error){
        console.log("ERROR LOGIN FIREBASE:",error)
        throw error
    }
}

export const socialAuth = async (provider) => {
    return await signInWithPopup(auth,provider)
}