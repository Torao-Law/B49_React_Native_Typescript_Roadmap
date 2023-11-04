// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { View, Text } from "react-native";
// Import Component
// import Header from "./src/components/header";
// import Content from "./src/components/content";
// import EmbedExpression from "./src/components/embed_expression";
// import Event from "./src/components/event";
// import Props from "./src/components/props";
// import State from "./src/components/state";
// import Form from "./src/components/form";
// import ListAndKey from "./src/components/list_and_key";
// import Form from "./src/native_base/form";

// const App = () => {
  // return (
    // <View style={{ marginTop: 200 }}>
      {/* <StatusBar />  */}
      {/* <Header /> */}
      {/* <Content /> */}
      {/* <EmbedExpression /> */}
      {/* <Event /> */}
      {/* <Props /> */}
      {/* <State /> */}
      {/* <Form /> */}
      {/* <ListAndKey /> */}
      // <Form />
    // </View>
  // );
// }

// export default App;

// status bar untuk screen atas hp apakah full berarti di tambahkan aja






// ====================================================================================================================
// ====================================================================================================================
// ====================================================================================================================
// ====================================================================================================================
// import React from "react";
// import { NativeBaseProvider, extendTheme } from "native-base";
// import AppLoading from "expo-app-loading";
// import * as SplashScreen from 'expo-splash-screen';
// import {
//   useFonts,
//   BalsamiqSans_400Regular,
//   BalsamiqSans_400Regular_Italic,
// } from "@expo-google-fonts/balsamiq-sans";

// import Container from "./Container";

// export default function App() {
//   let [fontsLoaded] = useFonts({
//     BalsamiqSans_400Regular,
//     BalsamiqSans_400Regular_Italic,
//   });

//   const fontConfig = {
//     BalsamiqSans: {
//       400: {
//         normal: "BalsamiqSans_400Regular",
//         italic: "BalsamiqSans_400Regular_Italic",
//       },
//     },
//   };

//   const customColors = {
//     primary: {
//       50: "#E3F2F9",
//       100: "#C5E4F3",
//       200: "#A2D4EC",
//       300: "#7AC1E4",
//       400: "#47A9DA",
//       500: "#0088CC",
//       600: "#007AB8",
//       700: "#006BA1",
//       800: "#005885",
//       900: "#003F5E",
//     },
//     amber: {
//       400: "#d97706",
//     },
//   };

//   const theme = extendTheme({
//     colors: customColors,
//     fontConfig,
//     fonts: {
//       heading: "BalsamiqSans",
//       body: "BalsamiqSans",
//       mono: "BalsamiqSans",
//     },
//     config: { initialColorMode: "dark" },
//   });

//   if (!fontsLoaded) {
//     return <AppLoading />;
//   } else {
//     return (
//       <NativeBaseProvider theme={theme}>
//         <Container />
//       </NativeBaseProvider>
//     );
//   }
// }


import React, { useEffect } from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import {
  useFonts,
  BalsamiqSans_400Regular,
  BalsamiqSans_400Regular_Italic,
} from "@expo-google-fonts/balsamiq-sans";
import * as SplashScreen from "expo-splash-screen"; // Import SplashScreen

import Container from "./container";

export default function App() {
  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
  });

  const fontConfig = {
    BalsamiqSans: {
      400: {
        normal: "BalsamiqSans_400Regular",
        italic: "BalsamiqSans_400Regular_Italic",
      },
    },
  };

  const customColors = {
    primary: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
    amber: {
      400: "#d97706",
    },
  };

  const theme = extendTheme({
    colors: customColors,
    fontConfig,
    fonts: {
      heading: "BalsamiqSans",
      body: "BalsamiqSans",
      mono: "BalsamiqSans",
    },
    config: { initialColorMode: "dark" },
  });

  // Menyembunyikan SplashScreen setelah fonts dimuat
  useEffect(() => {
    async function HideSplashScreen() {
      await SplashScreen.hideAsync();
    }

    HideSplashScreen();
  }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return <HideSplashScreen />;
  // } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    );
  }
// }
