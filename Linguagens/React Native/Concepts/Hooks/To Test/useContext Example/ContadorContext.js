import React, { useState, createContext } from 'react'

export const ContadorContext = createContext();

export function ContextProvider({children}){
const [num, setNum] = useState(0);

    <ContadorContext.Provider>
        {children}
    </ContadorContext.Provider>
}