import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "native-base";
import Form from "./src/screens/form";
import Hello from "./src/screens/hello";
import SocialMedia from "./src/screens/list_socials";

const Tab = createBottomTabNavigator();

function MyTab() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Hello"
        screenOptions={({ route }) => ({
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: theme.colors.primary["300"] },
          // tabBarIcon: ({ focused, color, size }) => {
          //   let iconName = "";

          //   if (route.name === "Hello") {
          //     iconName = focused ? "ios-home" : "ios-home-outline";
          //   } else if (route.name === "Form") {
          //     iconName = focused
          //       ? "ios-information-circle"
          //       : "ios-information-circle-outline";
          //   } else if (route.name === "sosmed") {
          //     iconName = focused
          //       ? "ios-information-circle"
          //       : "ios-information-circle-outline";
          //   }
          //   return <Ionicons name={iconName as "ios-home" | "ios-information-circle"} size={size} color={color} />;
          // },


          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "";
          
            if (route.name === "Hello") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Form" || route.name === "sosmed") {
              iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
            } else {
              iconName = focused ? "ios-chatbox-ellipses-sharp" : "ios-chatbox-ellipses-outline";
            }
          
            return <Ionicons name={iconName as "ios-home" | "ios-information-circle" | "ios-chatbox-ellipses-outline"} size={size} color={color} />;
          },
          
          

          tabBarActiveTintColor: theme.colors.primary["800"],
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Hello" component={Hello} />
        <Tab.Screen name="Sosmed" component={SocialMedia} />
        <Tab.Screen name="Form" component={Form} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTab;




// =======================================================================
// import React from "react";
// import { useTheme } from "native-base";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// // Import Screen
// import Form from "./src/screens/form";
// import Hello from "./src/screens/hello";


// export default function Container() {
//   const theme = useTheme()
//   const Tab = createBottomTabNavigator()
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           headerTintColor: "white",
//           headerStyle: { backgroundColor: theme.colors.primary["300"] },
//         }}
//       >

//         <Tab.Screen 
//           name="Home" 
//           component={Form} 
//           options={{
//             title: "Hello Screen"
//           }}
//         />

//         <Tab.Screen 
//           name="Hello" 
//           component={Hello} 
//         />

//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }











// =======================================================================
// import React from "react";
// import { useTheme } from "native-base";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// // Import Screen
// import Form from "./src/screens/form";
// import Hello from "./src/screens/hello";


// export default function Container() {
//   const theme = useTheme()
//   const Stack = createNativeStackNavigator()
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           // headerShown: false,
//           headerTintColor: "white",
//           headerStyle: { backgroundColor: theme.colors.primary["300"] },
//         }}
//       >

//         <Stack.Screen 
//           name="Home" 
//           component={Form} 
//           options={{
//             title: "Hello Screen"
//           }}
//         />

//         <Stack.Screen 
//           name="Hello" 
//           component={Hello} 
//         />

//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }
