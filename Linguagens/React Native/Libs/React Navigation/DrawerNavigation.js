import React from 'react'
import { Text, View } from 'react-native'

const Drawer = createDrawerNavigation();

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

function RootStack(){
    return(
        <Drawer.Navigator>
           <Drawer.Screen name='Opção 1' component={Option1} />
        </Drawer.Navigator>
        <Drawer.Screen name='Opção 2' component={Option2} />
        <Drawer.Screen name='Opção 3' component={Option3} />
            </Drawer.Navigator>
    );
}

export default function App(){
    return(
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
};