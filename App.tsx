import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import Container from "./container";
import { SSRProvider } from "@react-aria/ssr";

export default function App() {
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
    config: { initialColorMode: "dark" },
  });

  return (
    <SSRProvider>
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    </SSRProvider>
  );
}
