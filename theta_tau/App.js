import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./pages/homepage.jsx";
import Brothers from "./pages/brothers.jsx";
import Calender from "./pages/calender.jsx";
import BrotherPage from "./pages/brotherPage.jsx";
import Pillars from "./pages/pillars.jsx";
import EasterEgg from "./pages/easterEgg.jsx";
import Login from "./pages/Login.tsx";
import Meeting from "./pages/meeting.jsx";
// import splash from "./components/splash.js";
import {Appearance} from 'react-native';



const Stack = createNativeStackNavigator();

const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
  // Use dark color scheme
}

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Brothers" component={Brothers} />
        <Stack.Screen name="Calender" component={Calender} />
        <Stack.Screen name="BrotherPage" component={BrotherPage} />
        <Stack.Screen name="Pillars" component={Pillars}/>
        <Stack.Screen name="EasterEgg" component={EasterEgg} />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Meeting" component={Meeting} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

