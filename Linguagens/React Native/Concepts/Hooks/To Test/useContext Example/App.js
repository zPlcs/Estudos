import React from 'react'
import ContadorProvider from './ContadorContext'
import ComponenteA from './ComponenteA'
import ComponenteB from './ComponenteB'

export default function App(){
    return(
        <ContadorProvider>
            <ComponenteA />
            <ComponenteB />
        </ContadorProvider>
    );
}