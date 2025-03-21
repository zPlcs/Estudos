import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { ContadorContext } from './ContadorContext'; // Importamos o contexto

export default function ComponenteB() {
  const { contador } = useContext(ContadorContext); 
  // Usamos o useContext para acessar o valor do contador

  return (
    <View style={{ padding: 20 }}>
      <Text>O contador também é: {contador}</Text>
      {/* Exibe o valor do contador */}
    </View>
  );
}
