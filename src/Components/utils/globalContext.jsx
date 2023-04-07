import React, { createContext } from "react";
import { useReducer } from "react";

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  
  const [dentists, setDentists] = React.useState([]);
  const [state,dispatch] = useReducer(reducer,initialState)

  React.useEffect(
    () => {
      fetch ("https://jsonplaceholder.typicode.com/users")
      .then(response=>response.json())
      .then(data =>{
        setDentists(data)})
    },
    []
  )
  return (
    <ContextGlobal.Provider value={{dentists,
    state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
