import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './assets/src/pages/Login'; // Importe a tela de Login
import Signup from './assets/src/pages/Signup'; // Importe a tela de Signup
import ForgotPassword from './assets/src/pages/ForgotPassword';
import Menu from './assets/src/pages/Menu';
import Calendar from './assets/src/pages/Calendar';
import Subjects from './assets/src/pages/Subjects';
import Camera from './assets/src/pages/Camera';


const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{
          headerTransparent: true,
          title: '',
          headerShown: false,
        }}
        name="Login" 
        component={Login} />
        <Stack.Screen 
        options={{
          headerTransparent: true,
          title: '',
          headerShown: false,
        }}name="Signup" 
        component={Signup} />
        <Stack.Screen 
        options={{
          headerTransparent: true,
          title: '',
          headerShown: false,
        }}name="ForgotPassword" 
        component={ForgotPassword} />
        <Stack.Screen 
        options={{
          headerTransparent: true,
          title: '',
          headerShown: false,
        }}
        name="Menu" 
        component={Menu} />
      <Stack.Screen
        options={{
          headerTransparent: true,
          title: '',
          headerShown: false,
        }}
        name="Calendar" 
        component={Calendar} />
        <Stack.Screen
        options={{
          headerTransparent: true,
          title: '',
          headerShown: false,
        }}
        name="Subjects" 
        component={Subjects} />
        <Stack.Screen
        options={{
          headerTransparent: true,
          title: '',
          headerShown: false,
        }}
        name="Camera" 
        component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
