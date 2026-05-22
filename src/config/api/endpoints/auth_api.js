import http from "../httpclient"


// Register.jsx component making this req.
export const registerUser = (credentials,) => {
    const token = credentials.user.getIdToken
    return http.post('/auth/register',credentials,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
}

// Login.jsx component making this req
export const loginUser = (payload) => {
    return http.post('/auth/login',payload)
}

// Verify Current User
export const validateMe = (payload) => {
    return http.post('/auth/me',payload)
}