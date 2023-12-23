import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelCome from './src/screen/WelCome'
import Navigition from './src/screen/Navigition'
import Login from './src/screen/Login'
import Register from './src/screen/Register'
import Bill from './src/screen/Bill'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelCome" component={WelCome} options={{ headerShown: false }} />
        <Stack.Screen name="Navigition" component={Navigition} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Bill" component={Bill} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

