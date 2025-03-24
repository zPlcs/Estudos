import React, { useState, createContext } from 'react'

export const ContadorContext = createContext();

export function ContadorProvider({ children }) {
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);
    return (
        <ContadorContext.Provider value={{ num, setNum, num2, setNum2 }}>
            {children}
        </ContadorContext.Provider>
    );
}