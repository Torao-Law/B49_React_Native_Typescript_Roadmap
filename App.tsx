import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
// import {
//   useFonts,
//   BalsamiqSans_400Regular,
//   BalsamiqSans_400Regular_Italic,
// } from "@expo-google-fonts/balsamiq-sans";
// import * as SplashScreen from "expo-splash-screen"; // Import SplashScreen

import Container from "./container";
import { SSRProvider } from "@react-aria/ssr";

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   BalsamiqSans_400Regular,
  //   BalsamiqSans_400Regular_Italic,
  // });

  // const fontConfig = {
  //   BalsamiqSans: {
  //     400: {
  //       normal: "BalsamiqSans_400Regular",
  //       italic: "BalsamiqSans_400Regular_Italic",
  //     },
  //   },
  // };

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
    // fontConfig,
    // fonts: {
    //   heading: "BalsamiqSans",
    //   body: "BalsamiqSans",
    //   mono: "BalsamiqSans",
    // },
    config: { initialColorMode: "dark" },
  });

  // Menyembunyikan SplashScreen setelah fonts dimuat
  // useEffect(() => {
  //   async function HideSplashScreen() {
  //     await SplashScreen.hideAsync();
  //   }

  //   HideSplashScreen();
  // }, []);

  return (
    <SSRProvider>
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    </SSRProvider>
  );
}
