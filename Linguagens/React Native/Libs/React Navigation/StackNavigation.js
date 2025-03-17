import React from 'react'
import { View, Text, Buttton } from 'react-native'


export function HelloWorld(){
const navigation: useNavigation();

    return(
        <View style={{ flex:1,             
        justifyContent:'center', 
        alignItems:'center'}}>
            <Text>Hello World!</Text>
            <Button
            onPress={() => navigation.navigate('Patas')}
            />
        </View>
    );
}

export function Patas(){
const navigation = useNavigation();
    return(
        <View>
            <Text>Meu nome é Patrik!</Text>
            <Button
            onPress={() => navigation.navigate('HelloWorld')}
            />
        </View>
    );
}

export function RootStack(){
    <Stack.navigation>
        <Stack.screen name='HelloWorld' component={HelloWorld}/>
        <Stack.screen name='Patas' component={Patas}
    </Stack.navigation>
}

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
}