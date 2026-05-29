import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [masterKey,setMasterKey] = useState(null)

    useEffect(() => {

        const storedUser = JSON.parse(
            localStorage.getItem('user')
        );

        if(storedUser){

            setUser(storedUser);

        }

    }, []);

    const loginUser = (u) => {

        localStorage.setItem(
            'user',
            JSON.stringify(u.email)
        );

        setUser(u);
    };

    const logoutUser = () => {

        localStorage.removeItem('user');

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