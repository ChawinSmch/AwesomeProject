import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section2() {
  return (
    <View
      style={{
        backgroundColor: "#E5E7E9",
        marginTop: -75,
        margin: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 15,
        borderWidth: 1,
        borderBottomWidth: 3,
      }}
    >
      <View>
        <Text style={{ fontSize: 30, textAlign: "center", color: "#2C3E50" }}>
          Hiltan San francisco
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star-half" size={20} color="orange" />
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, textAlign: "center", marginEnd: 40 }}>
          Facilities provided may range from a modest quality mattress in a
          small room to large suites
        </Text>
      </View>
    </View>
  );
}
