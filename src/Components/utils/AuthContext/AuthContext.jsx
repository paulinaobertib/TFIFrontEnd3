import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
    
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("auth") ? true : false
  );

  const handleLogin = () => {
    setIsLogged(true);
    return {
        user: "marianapaulina@dh.com",
        password: "holamundo",
        token: "AFRLP11PDJ6Y74CJ0EB8"
    }
  };

  const propiedades = {
    isLogged,
    handleLogin,
  };

  return (
    <AuthContext.Provider value={propiedades}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;