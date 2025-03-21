import React, { createContext, useState } from 'react';

// Criando o contexto
export const ContadorContext = createContext();

// Criando o Provider para compartilhar o estado
export function ContadorProvider({ children }) {
  const [contador, setContador] = useState(0); // Estado global inicial do contador

  return (
    <ContadorContext.Provider value={{ contador, setContador }}>
      {children} {/* Envolvemos os filhos e compartilhamos os dados */}
    </ContadorContext.Provider>
  );
}
