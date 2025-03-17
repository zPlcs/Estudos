import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

export default function App(){
const [num,setNum] = useState(0);

const inc = () => {
    return setNum((prevNum) => prevNum+1);
}

useEffect(() => {
    setInterval(() => {
        setNum((prevNum) => prevNum+1);
   },1000);
},[]);

clearInterval();
    return(
        <View>
            <Text>{num}</Text>
        </View>
    );
}