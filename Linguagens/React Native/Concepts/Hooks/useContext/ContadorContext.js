import React, { useState, createContext } from 'react'

export const ContadorContext = createContext();

export function ContadorProvider({ children }){
const [contador, setContador] = useState(0);
return(
    <ContadorContext.Provider value={{contador,setContador}}>
        {children}
    </ContadorContext.Provider>

);
}