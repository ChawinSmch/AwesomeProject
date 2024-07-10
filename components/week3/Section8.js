import React from "react";
import { Text, View } from "react-native";
export default function Section8() {
  return (
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "colum" }}>
          <View>
            <Text style={{ fontSize: 15, color: "black" }}>Price</Text>
            <Text style={{ fontSize: 25, color: "red" }}>399.99</Text>
            <Text style={{ fontSize: 15, color: "black" }}>AVG/Night</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              textAlignVertical: "center",
              fontSize: 20,
              color: "white",
              backgroundColor: "red",
              width: 150,
              height: 60,
              borderRadius: 25 / 2,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            Book Now
          </Text>
        </View>
      </View>
    </View>
  );
}
