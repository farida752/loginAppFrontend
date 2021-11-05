import React from 'react';

import Home from'./Screens/Home.js';
import Accounts from './Screens/Accounts.js'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
   
   
 <NavigationContainer>
 <Stack.Navigator
 screenOptions={{headerShown: false}}>

  
 
  <Stack.Screen name="Home" component={Home}/>
  <Stack.Screen name = "Accounts" component={Accounts}/>
  
 </Stack.Navigator>
</NavigationContainer>

  );
}