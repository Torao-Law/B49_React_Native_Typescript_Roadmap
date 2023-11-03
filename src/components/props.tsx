import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image } from "react-native";

import List from "../components/list";

export default function Props() {
  let pic = {
    uri: "https://www.nipponexpress.com/press/report/img/06-Nov-20-ogp.jpeg",
  };

  return (
    <View>
      <StatusBar />
      <Text>On the Image element using the default props, namely source</Text>
      <Image source={pic} style={{ width: "100%", height: 200 }} />

      <List listData="BMW" />
      <List listData="Mercedes-Benz" />
      <List listData="Lamborghini" />
    </View>
  );
}
