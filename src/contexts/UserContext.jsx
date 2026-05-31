import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import saveMasterKeyInSession from "../utilis/saveMasterKeyInSession";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [masterKey,setMasterKey] = useState(null)


    const restoreMasterKey = async () => {
        const stored = sessionStorage.getItem('vaultkey')

        if(!stored) return 
        const session = JSON.parse(stored)

        if(Date.now() > session.expires_at){
            sessionStorage.removeItem('vaultkey')
            return
        }

        const keyBytes = Uint8Array.from(atob(session.key),c=>c.charCodeAt(0))

        const importKey = await crypto.subtle.importKey(
            "raw",
            keyBytes,
            {
                name:"AES-GCM"
            },
            true,
            ["encrypt","decrypt"]
        )
        setMasterKey(importKey)
    }   

    useEffect(() => {

    const interval = setInterval(() => {

        const stored = sessionStorage.getItem("vaultkey")

            if(!stored) return

            const session = JSON.parse(stored)

            if(Date.now() > session.expires_at){
                sessionStorage.removeItem("vaultkey")
                setMasterKey(null)
            }

        }, 60000)

        return () => clearInterval(interval)
    }, [])

    // check stored user
    useEffect(() => {
        const init = async () => {
            const storedUser = JSON.parse(
            localStorage.getItem('user')
        )

        if(storedUser){
            setUser(storedUser)
            await restoreMasterKey()
        }
        }

        init()
    }, [])


    // Save masterkey into session
    useEffect( () => {
        if(!masterKey) return
        saveMasterKeyInSession(masterKey)
    },[masterKey])

    


    const loginUser = (u) => {

        localStorage.setItem(
            'user',
            JSON.stringify(u.email)
        );

        setUser(u);
    };

    const logoutUser = () => {

        localStorage.removeItem('user');
        sessionStorage.removeItem('vaultkey')
        setMasterKey(null)

        setUser(null);
    };

    return (

        <UserContext.Provider
            value={{
                user,
                setMasterKey,
                masterKey,
                loginUser,
                logoutUser
            }}
        >

            {children}

        </UserContext.Provider>

    );
};

export const useUser = () => {

    return useContext(UserContext);

};