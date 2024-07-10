import React from "react";
import {Text, View } from "react-native";

export default function Section3() {
  return (
    <View style={{ padding: 10 }}>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <Text
          style={{
            textAlign: "center",
            textAlignVertical: "center",
            fontSize: 30,
            color: "white",
            backgroundColor: "red",
            width: 80,
            height: 80,
            borderRadius: 80 / 2,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          9.5
        </Text>
        <View style={{ paddingLeft: 10, paddingTop: 10 }}>
          <Text style={{ fontSize: 25, color: "red" }}>Excellent</Text>
          <Text>See 801 reviews</Text>
        </View>
      </View>
    </View>
  );
}
