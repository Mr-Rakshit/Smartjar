import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import Dashboard from "./screens/Dashboard";
import JarConnect from "./screens/JarConnect";
import Demo from "./screens/Smartconfig";
import Espcard from "./components/Espcard";
import Jarques from "./components/Jarques";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          // options={{ headerShown: false }}
          name="Espcard"
          component={Espcard}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name="Demo"
          component={Demo}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Dashboard"
          component={Dashboard}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="JarConnect"
          component={JarConnect}
        />
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Espcard"
          component={Espcard}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Jarques"
          component={Jarques}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        {/* */}
        {/* <Stack.Screen
          // options={{ headerShown: false }}
          name="Smartconfig"
          component={Smartconfig}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
