import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Form() {
  return (
    <View style={styles.container}>
      <StatusBar />
      {/* Code Here */}
      <Text style={styles.header}>Sign In</Text>
      {/* <Text style={{ ...styles.header, color: 'blue' }}>Sign In // Jika ingin kombinasikan.</Text> */}

      <Text style={styles.textStyle}>Email</Text>
      <TextInput style={styles.textInput} defaultValue="hi.dandi9@dumbways.com" />

      <Text style={styles.textStyle}>Password</Text>
      <TextInput
        style={styles.textInput}
        defaultValue="ex.8E0112D!"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

// Create Variable for CSS

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  header: {
    color: "#e74c3c",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#e74c3c",
    height: 45,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
  },
  textButton: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  textStyle: {
    color: "#e74c3c",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textInput: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
    color: "#95a5a6",
    borderColor: "#7f8c8d",
  },
});
