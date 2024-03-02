import { createContext, useContext, useState } from 'react'


export const globalContext = createContext()
// console.log("globalContext :", globalContext);


export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    console.log("token :", token);

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


    return <globalContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser }}>
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