import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../views/Login';
import Forget from '../views/Forget';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        </Stack.Group>
        <Stack.Group screenOptions={{ headerShown: true, headerTransparent: true }}>
        <Stack.Screen name="Forget" component={Forget} 
        options={{ title: '' }}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
