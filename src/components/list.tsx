import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export default function List(props: { listData: string }) {
  return (
    <View>
      <StatusBar />
      <Text>{props.listData}</Text>
    </View>
  );
}
