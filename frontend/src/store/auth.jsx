import { createContext, useContext, useEffect, useState } from 'react'


export const globalContext = createContext()
// console.log("globalContext :", globalContext);


export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [userData, setUserData] = useState('')
    console.log("token :", token);
    console.log("userData :", token);
    const AuthorizationToken = `${token}`

    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem('token', serverToken)
    }
    // console.log("storeTokenInLS :", storeTokenInLS); 

    const isLoggedIn = !!token
    console.log("isLoggedIn :", isLoggedIn);

    const logoutUser = () => {
        setToken('')
        return localStorage.removeItem('token')
    }
    // console.log("logoutUser :", logoutUser);

    // JWT AUTHENTICATION TO GET THE CURRENTLY LOGGEDIN USER DATA 

    const userAuthentication = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/user`, {
                method: 'GET',
                headers: {
                    Authorization: AuthorizationToken
                }
            })
            console.log("GET ALL USER DATA RESPONSE :", response);
            if (response.ok) {
                const data = await response.json()
                console.log("userData :", data.userData);
                setUserData(data.userData)
            }
        } catch (error) {
            console.log("GET ALL USER DATA ERROR :", error);

        }
    }
    useEffect(() => {
        userAuthentication()
    }, [])

    return <globalContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser, userData, AuthorizationToken }}>
        {children}
    </globalContext.Provider>

}

export const useAuth = () => {
    const authContextValue = useContext(globalContext)
    // console.log("authContextValue :", authContextValue);

    if (!authContextValue) {
        throw new Error('USEAUTH USED  OUTSIDE OF THE PROVIDER')
    }
    return authContextValue;
};