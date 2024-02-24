import { createContext, useContext } from 'react'


export const globalContext = createContext()
console.log("globalContext :", globalContext);


export const AuthProvider = ({ children }) => {

    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem(token, serverToken)
    }
    console.log("storeTokenInLS :", storeTokenInLS);

    return <globalContext.Provider value={storeTokenInLS}>
        {children}
    </globalContext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(globalContext)
    console.log("authContextValue :", authContextValue);

    if(!authContextValue){
      throw new console.error(error);
    }

}