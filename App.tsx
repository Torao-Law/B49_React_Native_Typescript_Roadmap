import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
// Import Component
// import Header from "./src/components/header";
// import Content from "./src/components/content";
// import EmbedExpression from "./src/components/embed_expression";
// import Event from "./src/components/event";
import Props from "./src/components/props";

const App = () => {
  return (
    <View style={{ marginTop: 200 }}>
      <StatusBar /> 
      {/* <Header /> */}
      {/* <Content /> */}
      {/* <EmbedExpression /> */}
      {/* <Event /> */}
      <Props />
    </View>
  );
}

export default App;

// status bar untuk screen atas hp apakah full berarti di tambahkan aja
