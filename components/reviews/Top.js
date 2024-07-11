import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Top() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{flexDirection: "row",padding: 10,justifyContent: "space-between",
        }}
      >
        <View>
          <View
            style={{position: "absolute",top: 10,left: 10,backgroundColor: "transparent",
            }}
          >
            <AntDesign name="arrowleft" size={24} color="#FF5733" />
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 20,  top: 10 }}>Reviews</Text>
        </View>

        <View>
          <View
            style={{
              position: "absolute",top: 10,right: 10,backgroundColor: "transparent",
            }}
          >
            <Text style={{ color: "#FF5733", fontSize: 18 }}>Replay</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
