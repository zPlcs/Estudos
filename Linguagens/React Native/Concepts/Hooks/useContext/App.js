import React from 'react';
import { ContadorProvider } from './ContadorContext'; // Importamos o Provider
import ComponenteA from './ComponenteA'; // Primeiro componente consumidor
import ComponenteB from './ComponenteB'; // Segundo componente consumidor

export default function App() {
  return (
    <ContadorProvider>
      {/* Envolvemos os componentes com o ContadorProvider */}
      <ComponenteA />
      <ComponenteB />
    </ContadorProvider>
  );
}
