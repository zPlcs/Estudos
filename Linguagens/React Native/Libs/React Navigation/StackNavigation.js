import React from 'react'
import { View, Text, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function HelloWorld() {
    const navigation = useNavigation();

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Hello World!</Text>
            <Button
                title='Ir para a página do Patas'
                onPress={() => navigation.navigate('Patas')}
            />
        </View>
    );
}

function Patas() {
    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Meu nome é Patrik!</Text>
            <Button
                title='Ir para a página inicial'
                onPress={() => navigation.navigate('HelloWorld')}
            />
        </View>
    );
}

function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HelloWorld' component={HelloWorld} />
            <Stack.Screen name='Patas' component={Patas} />
        </Stack.Navigator>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
}