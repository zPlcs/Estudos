import React, { useContext } from 'react'
import { View, Button, Text } from 'react-native'

import { ContadorContext } from './ContadorContext'

export default function ComponenteB() {
    const { num2, setNum2 } = useContext(ContadorContext);
    return (
        <View style={{ padding: 20, borderColor: 'black', borderWidth: 2 }}>
            <Text>Componente B</Text>
            <Text>{num2}</Text>
            <Button title='Increment' onPress={() => setNum2(num2 + 1)} />
            <Button title="Decrement" onPress={() => setNum2(num2 - 1)} />
        </View>
    );
}