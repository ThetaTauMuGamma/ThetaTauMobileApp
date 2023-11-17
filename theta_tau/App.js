// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Brothers from './pages/brothers';
import Homepage from './pages/homepage';
import Calender from './pages/calender';
import BrotherPage from './pages/brotherPage';
import Pillars from './pages/pillars';
import EasterEgg from './pages/easterEgg';
import Login from './pages/login';
import { DarkMode } from './components/darkmode'; // Import the DarkMode class

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Brothers" component={Brothers} />
        <Stack.Screen name="Calender" component={Calender} />
        <Stack.Screen name="BrotherPage" component={BrotherPage} />
        <Stack.Screen name="Pillars" component={Pillars} />
        <Stack.Screen name="EasterEgg" component={EasterEgg} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// You can trigger dark mode anywhere in your application like this:
// DarkMode.toggleDarkMode();
