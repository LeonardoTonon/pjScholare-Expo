import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../views/Login';
import Forget from '../views/Forget';
import Home from '../views/Home';
import Additional from "../views/Additional"
import Cam from "../components/Camera"

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
        <Stack.Group screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Home" component={Home}
                options={{ title: '' }}/>
        </Stack.Group>
        <Stack.Group screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Additional" component={Additional}
                options={{ title: 'Informações iniciais' }} />
        </Stack.Group>
        <Stack.Group screenOptions={{ headerShown: true, headerTransparent: true }} >
            <Stack.Screen name="Cam" component={Cam}
                options={{ title: '' }}
            />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
