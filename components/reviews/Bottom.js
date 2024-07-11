import React   from "react";
import { Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from '@expo/vector-icons';


export default function Bottom(){
    return (
        <View style={{ flex: 1 ,paddingTop:10 }}>
            <View style={{ justifyContent:"space-between" , flexDirection:"row" ,paddingTop:10}}>
                <View style={{ flexDirection: "row"}}>
                    {/* รูปกะข้อความ */}
                    <View style={{paddingLeft:50}}>
                        <Image style={{ width: 45, height: 45, borderRadius: 100, resizeMode: "cover"}} source={require("../../assets/week3/profile-3.jpg")}/>
                    </View>
                    <View style={{ flexDirection: "column"}}>
                        <View >
                            <View style={{ paddingLeft:5}}>
                                <Text style={{ fontSize: 20 }}>Grigoriy Kozhukhov</Text>
                                <View style={{ flexDirection: "row",padding:3 }}>
                                    <FontAwesome name="star" size={14} color="orange" />
                                    <FontAwesome name="star" size={14} color="orange" />
                                    <FontAwesome name="star" size={14} color="orange" />
                                    <FontAwesome name="star" size={14} color="orange" />
                                    <Octicons name="star" size={14} color="gray" />
                                </View>
                            </View>
                        </View>
                    </View>
                    
                </View>
                <View>
                    <Text style={{ fontSize: 13 , color:'gray' ,paddingRight:40 ,paddingTop:13}}>jun 2018</Text>

                </View>
            </View>
            <View style={{ paddingLeft:50 , paddingTop:5}}>
                <Text style={{ fontSize:20}}>Nice Place</Text>
                <Text style={{ fontSize:13 , color:'gray'}}>Andaz Tokyo Toranomon Hills is one of the newest luxury 
                </Text>
                <Text style={{ fontSize:13, color:'gray'}}>hotels on Tokyo Located in one of the uprising areas of Tokyo</Text>
            </View>
            <View style={{ justifyContent:"space-between" , flexDirection:"row" , paddingTop:25 }}>
                <View style={{ flexDirection: "row"}}>
                    {/* รูปกะข้อความ */}
                    <View style={{paddingLeft:50}}>
                        <Image style={{ width: 45, height: 45, borderRadius: 100, resizeMode: "cover"}} source={require("../../assets/week3/profile-4.jpg")}/>
                    </View>
                    <View style={{ flexDirection: "column"}}>
                        <View >
                            <View style={{ paddingLeft:5}}>
                                <Text style={{ fontSize: 20 }}>Ea Tipene</Text>
                                <View style={{ flexDirection: "row",padding:3 }}>
                                    <FontAwesome name="star" size={14} color="orange" />
                                    <FontAwesome name="star" size={14} color="orange" />
                                    <FontAwesome name="star" size={14} color="orange" />
                                    <FontAwesome name="star" size={14} color="orange" />
                                    <Octicons name="star" size={14} color="gray" />
                                </View>
                            </View>
                        </View>
                    </View>
                    
                </View>
                <View>
                    <Text style={{ fontSize: 13 , color:'gray' ,paddingRight:40 ,paddingTop:13}}>jun 2018</Text>

                </View>
            </View>
            <View style={{ paddingLeft:50 , paddingTop:5}}>
                <Text style={{ fontSize:20}}>Great for families</Text>
                <Text style={{ fontSize:13 , color:'gray'}}>Andaz Tokyo Toranomon Hills is one of the newest luxury 
                </Text>
                <Text style={{ fontSize:13, color:'gray'}}>hotels on Tokyo Located in one of the uprising areas of Tokyo</Text>
            </View>


            
            
        </View>
    );
}