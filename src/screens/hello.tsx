// import React from 'react'
// import { View } from 'native-base'

// export default function Hello() {
//   return (
//     <View>hello</View>
//   )
// }


import * as React from "react";
import { Text, Box, Pressable } from "native-base";


export default function Hello(props: any) {
  return (
    <Box
      bg="primary.400"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        Life's too short
      </Text>

      <Pressable
        onPress={() => props.navigation.navigate("IncDec")}
        style={{
          backgroundColor: "#487eb0",
          height: 40,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          margin: 20,
        }}
      >
        <Text style={{ color: "white" }}>Screen Increment and Decrement</Text>
      </Pressable>
    </Box>
  );
};
