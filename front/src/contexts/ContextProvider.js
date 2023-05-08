import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    const [indexTab, setIndexTab] = useState('Electro');

    return(
        <StateContext.Provider
            value={{
                test : 'Ito le test',
                indexTab, 
                setIndexTab,
                drawerWidth : 250,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);