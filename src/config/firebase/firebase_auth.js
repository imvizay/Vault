import { createUserWithEmailAndPassword,updateProfile,signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
 

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


export const socialAuth = async (provider) => {
    return await signInWithPopup(auth,provider)
}