import React from "react";
import { useTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Screen
import Form from "./src/screens/form";
import Hello from "./src/screens/hello";


export default function Container() {
  const theme = useTheme()
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          headerTintColor: "white",
          headerStyle: { backgroundColor: theme.colors.primary["300"] },
        }}
      >

        <Stack.Screen 
          name="Home" 
          component={Form} 
          options={{
            title: "Hello Screen"
          }}
        />

        <Stack.Screen 
          name="Hello" 
          component={Hello} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
