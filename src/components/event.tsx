import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity, Alert, Button } from "react-native";

export default function Event() {
  function Greeting() {
    return Alert.alert("Good Morning Everyone Have a Nice Day");
  }

  return (
    <View>
      <StatusBar />
      <Text>If you press Click Here then an alert will appear</Text>
      <TouchableOpacity
        onPress={() => Alert.alert("Hello Full-Stack Bootcamp Participants")}
      >
        <Text>Click Here</Text>
      </TouchableOpacity>

      <Text>If you press Click Here then an alert will appear</Text>
      <TouchableOpacity onPress={Greeting}>
        <Text>Greeting</Text>
      </TouchableOpacity>

      <Button
        title="Press Me (Button)"
        onPress={() => Alert.alert("Button Pressed")}
      />
    </View>
  );
}
