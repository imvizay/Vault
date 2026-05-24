import { config } from "zod"
import http from "../httpclient"


// Register.jsx component making this req.
export const registerUser = (token) => {
    
    return http.post('/auth/sync',{},{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
}

// Login.jsx component making this req
export const loginUser = () => {
    return http.post('/auth/login')
}

// Verify Current User
export const validateMe = () => {
    return http.post('/auth/me')
}