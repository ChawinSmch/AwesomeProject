import React from "react";
import { Image, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Section1() {
  return (
    <View style={{ flex: 1 }}>
      
      
      <View style={{ flexDirection: "row" }}>
      
        <Image
          style={{ flex: 1, resizeMode: "cover", aspectRatio: 4 / 2 }}
          source={require("../../assets/week3/room-6.jpg")}
          
        />
        <View style={{ position: "absolute",top: 10, left:10, backgroundColor: "transparent", }}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </View>
        <View style={{ position: "absolute",top: 10, right:10, backgroundColor: "transparent", }}>
          <MaterialIcons name="photo-library" size={24} color="white" />
        </View>
      </View>
    </View>
  );
}
