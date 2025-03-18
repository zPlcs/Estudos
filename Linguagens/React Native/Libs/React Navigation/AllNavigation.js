import React from 'react'
import { View, Text, Button } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function PaginaPrincipal(){
    return(
        <View>
            <Text>Página Principal</Text>
        </View>
    );
}

function PaginaConfiguracoes(){
    return(
        <View>
            <Text>Página de configurações</Text>
        </View>
    );
}

function Option1(){
    return(
        <View>
            <Text>Opção 1</Text>
        </View>
    );
}

function Option2(){
    return(
        <View>
            <Text>Opção 2</Text>
        </View>
    );
}

function Option3(){
    return(
        <View>
            <Text>Opção 3</Text>
        </View>
    );
}

function PaginaPerfil(){
    return(
        <View>
            <Text>Página de Perfil</Text>
        </View>
    );
}

function PaginaFinal(){
    return(
        <View>
            <Text>Parabéns Patinhas</Text>
        </View>
    );
}

function RootStack({ navigator }){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Página de Perfil' component={PaginaPerfil} />
            <Stack.Screen name='Página Final' component={PaginaFinal} />
        </Stack.Navigator>
    );
}

function RootDrawer(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Opção 1' component={Option1} />
            <Drawer.Screen name='Opção 2' component={Option2} />
            <Drawer.Screen name='Opção 3' component={Option3} />
        </Drawer.Navigator>
    );
}

function RootTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Página Principal' component={PaginaPrincipal} />
            <Tab.Screen name='Página de Configurações' component={PaginaConfiguracoes} />
        </Tab.Navigator>
    );
}

export default function App(){
    return(
        <NavigationContainer>
            <RootDrawer />
            <RootStack />
            <RootTab />
        </NavigationContainer>

        
    );
}