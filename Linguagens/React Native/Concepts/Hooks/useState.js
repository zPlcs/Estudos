import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

export default function App(){
    const [num, setNum] = useState(0);
    
    function inc(){
        return setNum((prevNum) => prevNum + 1);
    }

    function dec(){
        return setNum((prevNum) => prevNum - 1);
    }

    return(
        <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
            <Text style={{ fontSize: 30, fontWeight:'bold' }}>{num}</Text>
            <Button 
            title='Incrementar'
            onPress={inc}
            />
            <Button 
            title='Decrementar'
            onPress={dec}
            />
        </View>
    );
}