import React from "react";
import { Text, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

export default function Mid() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{flexDirection: "row",padding:10 ,justifyContent: 'space-between',}}>

        <View style={{ paddingLeft:80 ,paddingTop:20}}>
            <Text style={{ fontSize: 52,  top: 10,color:"#FF5733" }}>4.7</Text>
            <Text style={{ fontSize: 16, color:"gray" }}> out  of  5 </Text>
        </View>
        <View style={{ flexDirection:'row' , paddingTop:30}}>
            <View>
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="star" size={10} color="gray" />
                        <FontAwesome name="star" size={10} color="gray" />
                        <FontAwesome name="star" size={10} color="gray" />
                        <FontAwesome name="star" size={10} color="gray" />
                        <FontAwesome name="star" size={10} color="gray" />
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: "row-reverse" }}>
                        <FontAwesome name="star" size={10} color="gray" />
                        <FontAwesome name="star" size={10} color="gray" />
                        <FontAwesome name="star" size={10} color="gray" />
                        <FontAwesome name="star" size={10} color="gray" />                        
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: "row-reverse" }}>
                        <FontAwesome name="star" size={10} color="gray" />
                        <FontAwesome name="star" size={10} color="gray" />
                        <FontAwesome name="star" size={10} color="gray" />                       
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: "row-reverse" }}>
                        <FontAwesome name="star" size={10} color="gray" />
                        <FontAwesome name="star" size={10} color="gray" />                       
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: "row-reverse" }}>
                        <FontAwesome name="star" size={10} color="gray" />                       
                    </View>
                </View>
            </View>
            <View>
                <View>
                <View>
                    <View style={{ flexDirection: "row" }}>
                                           
                    </View>
                </View>
                </View>
            </View>
        </View>
        <View style={{ paddingRight:10}}>
            <Text style={{ color: "black", fontSize: 16 ,paddingTop:88}}>25 Ratings</Text>
          </View>

      </View>
    </View>
  );
}
