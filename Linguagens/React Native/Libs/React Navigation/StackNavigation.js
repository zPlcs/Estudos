import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-Navigation/native';
import { createNativeStackNavigator } from '@react-Navigation/native-stack';

export function HelloWorld() {
    const Navigation = useNavigation();

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Hello World!</Text>
            <Button
                onPress={() => Navigation.navigate('Patas')}
            />
        </View>
    );
}

export function Patas() {
    const Navigation = useNavigation();
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Meu nome é Patrik!</Text>
            <Button
                onPress={() => Navigation.navigate('HelloWorld')}
            />
        </View>
    );
}

export function RootStack() {
    <Stack.Navigation>
        <Stack.Screen name='HelloWorld' component={HelloWorld} />
        <Stack.Screen name='Patas' component={Patas} />
    </Stack.Navigation>
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
}