import React, {useContext} from 'react'
import {View, Button, Text} from 'react-native'

import ContadorContext from './ContadorContext'

export default function ComponenteB(){
    const {num, setNum} = useContext(ContadorContext);
    return (
        <View style={{ padding: 20, borderColor: 'black', borderWidth: 2}}>
            <Text>Componente B</Text>
            <Text>{num}</Text>
            <Button title="Decrement" onPress={(PrevNum) => setNum(PrevNum - 1)} />
        </View>
    );
}