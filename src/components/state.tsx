import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function State() {
  const [counter, setCounter] = useState<number>(0);

  function Add() {
    setCounter(counter + 1);
  }

  function Less() {
    setCounter(counter - 1);
  }

  return (
    <View>
      <StatusBar />
      <Text>
        If you click the add button it will increase by one, vice versa if you
        click the less button it will decrease by one
      </Text>

      <Text
        style={styles.counter}
      >
        {counter}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={Add}
          style={styles.button}
        >
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={Less}
          style={styles.button}
        >
          <Text>Less</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    padding: 10,
    backgroundColor: "#DDDDDD",
    borderRadius: 5,
    marginHorizontal: 10,
  },
});
