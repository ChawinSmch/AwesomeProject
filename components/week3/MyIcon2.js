import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Text, TouchableOpacity,  View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function MyIcon2(props) {
  return (
    <View style={{ flex: 1,justifyContent:"center", alignItems: "center" }}>
      <TouchableOpacity style={{ alignItems : "center" }} onPress={ props.onPress }>
        <FontAwesome name={props.name} size={props.size} color={props.color} />
        <Text>{props.title}</Text>
        </TouchableOpacity>
    </View>
    
  );
}
{/* <TouchableOpacity style={{ alignItems : "center" }} onPress={ props.onPress }>
        <MaterialCommunityIcons name="{props.name}" size={props.size} color={props.color} />
        <Text>{props.title}</Text>
        </TouchableOpacity> */}