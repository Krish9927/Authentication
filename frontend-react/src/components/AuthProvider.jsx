import React, { createContext } from 'react'
import { useState , useContext } from 'react'

const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const[isLogged,setLogged]=useState(
    !!localStorage.getItem('accessToken')
  )
    return (
    <>
    <AuthContext.Provider value={{isLogged,setLogged}}>
        {children}
    </AuthContext.Provider>

    
    </>
  )
}

export default AuthProvider
export {AuthContext}