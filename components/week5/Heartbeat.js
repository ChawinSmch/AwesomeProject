import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {    

    const [beat,setbeat] = useState(0);
    const onPressButton = () => {
        setbeat(beat+1);
    }

    return (
        <View>
            <View style={{ flexDirection:'row',justifyContent:'space-around',padding:50}}> 
                <TouchableOpacity onPress={onPressButton}>
                    <FontAwesome name="star" size={100} color="orange" />
                </TouchableOpacity>
                <Text style={{fontSize:50}}>{ beat }</Text>
            </View>
        </View>
    );
}
