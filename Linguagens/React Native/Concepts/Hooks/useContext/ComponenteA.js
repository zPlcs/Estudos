import React, { useContext } from 'react';
import { Text, Button, View } from 'react-native';
import { ContadorContext } from './ContadorContext'; // Importamos o contexto

export default function ComponenteA() {
  const { contador, setContador } = useContext(ContadorContext); 
  // Usamos o useContext para acessar o valor e a função de atualização do contador

  return (
    <View style={{ padding: 20 }}>
      <Text>Contador Atual: {contador}</Text>
      {/* Exibe o valor do contador */}
      <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
      {/* Botão para incrementar o contador */}
    </View>
  );
}
