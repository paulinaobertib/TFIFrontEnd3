import React, { createContext, useState } from 'react'

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(!!JSON.parse(sessionStorage.getItem("token")));

  const handleLogin = () => {
    return {
      user: "jaider23@gmail.com",
      token: "XDFGTSREFDGEQ2341234"
    }
  };

  const State = {
    isLogged,
    handleLogin,
    setIsLogged
  };

  return (
    <AuthContext.Provider value={State}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider 