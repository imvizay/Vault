import http from "../httpclient"


// Register.jsx component making this req.
export const registerClient = (payload) => {
    return http.post('/auth/register',payload)
}

// Login.jsx component making this req
export const loginUser = (payload) => {
    return http.post('/auth/login',payload)
}

// Verify Current User
export const validateMe = (payload) => {
    return http.post('/auth/me',payload)
}