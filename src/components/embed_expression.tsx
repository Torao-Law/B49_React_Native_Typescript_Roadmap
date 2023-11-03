import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export default function EmbedExpression() {
  function getMajor(): string {
    return "Full-Stack";
  }
  const companyName: string = "Dumbways.id";

  return (
    <View>
      <StatusBar />
      <Text>
        Welcome To {companyName} Class {getMajor()}
      </Text>
    </View>
  );
}
