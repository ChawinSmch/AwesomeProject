import React from "react";
import { Image, Text, View } from "react-native";

export default function Section7() {
  return (
    <View style={{ padding: 20 }}>
      <View>
        <Text style={{ fontSize: 20 }}>Room Type</Text>
      </View>
      <View style={{ flexDirection: "row", padding: 10, margin: 10 }}>
        <Image
          style={{
            width: 100,
            height: 120,
            borderRadius: 15 / 2,
            marginLeft: -20,
          }}
          source={require("../../assets/week3/room-8.jpg")}
        />
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontSize: 20 }}>Standard Twin Room</Text>
          <View style={{ paddingTop: 50 }}>
            <Text style={{ fontSize: 25, color: "red" }}>$399.99</Text>
            <Text style={{ fontSize: 15, color: "green" }}>
              Hurry Up! This is your last room!
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
