import api from "./axios";

api.interceptors.request.use(
    (config) => {
        const token = user.getIdToken() // firebase access token

        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }, 
    (error) => {
        return Promise.reject(error)
    }
)


api.interceptors.response.use(

    (response) => {
        return response.data;
    },

    (error) => {
        if(error === "ECONNABORTED"){
            console.error("Request timed out. Please try again.");
            return;
        }
        console.log("AXIOS ERROR:",error);
        return;
    }
)