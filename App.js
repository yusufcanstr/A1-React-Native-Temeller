import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screen/HomeScreen";
import CoursesScreen from "./src/screen/CoursesScreen"; // Burada düzeltme yapıldı
import CoursesInformation from "./src/screen/CoursesInformation";
import CounterScreen from "./src/screen/CounterScreen";
import BoxScreen from "./src/screen/BoxScreen";
import ColorChangeScreen from "./src/screen/ColorChangeScreen";
import PasswordScreen from "./src/screen/PasswordScreen";
import DesigneScreen from "./src/screen/DesigneScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CoursesScreen" component={CoursesScreen} />
        <Stack.Screen
          name="CoursesInformation"
          component={CoursesInformation}
        />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="BoxScreen" component={BoxScreen} />
        <Stack.Screen name="ColorChangeScreen" component={ColorChangeScreen} />
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
        <Stack.Screen name="DesigneScreen" component={DesigneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
