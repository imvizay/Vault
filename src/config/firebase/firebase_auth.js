import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "./firebase";


export const registerWithFirebase = async (username,email,password) => {

    const userCredentials = await createUserWithEmailAndPassword(auth,email,password)

    await updateProfile(userCredentials.user,{
        displayName:username
    })
    console.log("userCredentials",userCredentials)
    return userCredentials.user

} 