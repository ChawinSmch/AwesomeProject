import React from "react";
import MyIcon2 from "../../components/week3/MyIcon2.js";
import { View } from "react-native";

export default function Section5() {
  return (
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <MyIcon2 title="Wifi" name="wifi" size={30} color="#ABEBC6" />
        <MyIcon2 title="Coffee" name="coffee" size={30} color="#ABEBC6" />
        <MyIcon2 title="Bath" name="bath" size={30} color="#ABEBC6" />
        <MyIcon2 title="Car" name="car" size={30} color="#ABEBC6" />
        <MyIcon2 title="Paw" name="paw" size={30} color="#ABEBC6" />
      </View>
    </View>
  );
}
