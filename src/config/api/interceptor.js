console.log("INTERCEPTOR FILE LOADED")
import api from "./axios"

import { auth } from "../firebase/firebase"


api.interceptors.request.use(

    async (config) => {
        console.log("INTERCEPTOR RUNNING...")

        const user = auth.currentUser

        // console.log("CURRENT USER:", user)

        if (user) {

            const token = await user.getIdToken();

            console.log("TOKEN",token)

            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;

    },

    (error) => {

        return Promise.reject(error)
    }
)


api.interceptors.response.use(

    (response) => {

        return response.data
    },

    (error) => {

        if (error.code === "ECONNABORTED") {

            console.error("Request timed out. Please try again.")
        }

        console.log("AXIOS ERROR:",error)

        return Promise.reject(error)
    }
)

