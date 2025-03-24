import React ,{ useContext } from 'React'
import { Text, View, Button } from 'react-native'

import ContadorContext from './ContadorContext'

export default function ComponenteA() {
    const {num, setNum} = useContext(ContadorContext)
    return(
        <View style={{ padding: 20, borderColor: 'black', borderWidth: 2}}>
            <Text>Componente A</Text>
            <Text>{num}</Text>
            <Button title='Increment' onPress={(PrevNum) => setNum(PrevNum + 1)} />
        </View>
    )
}