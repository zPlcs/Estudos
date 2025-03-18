import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function MainPage(){
	return(
		<View>
			<Text>Página Inicial</Text>
		</View>
	);
}

function ProfilePage(){
	return(
		<View>
			<Text>Página de Perfil</Text>
		</View>
	);
}

function RootStack(){
	return(
		<Tab.Navigator>
			<Tab.Screen name='Página Inicial' component={MainPage} />
			<Tab.Screen name='Página de Perfil' component={ProfilePage} />
		</Tab.Navigator>
	);
}

export default function App(){
	return(
		<NavigationContainer>
			<RootStack />
		</NavigationContainer>
	);
}