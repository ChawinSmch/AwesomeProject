import { StatusBar } from "expo-status-bar";
import React from "react";
import {   View,  TextInput, } from "react-native";
import MyIcon2 from "../week3/MyIcon2";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
// import Travel from '../screens/week3/Travel';
// import Resort from '../screens/week3/Resort';
// import Health from '../screens/week5/Health';

export default function HomeIconMenu() {
  const navigation = useNavigation();

  return (
    <View style={{ marginHorizontal : 20 , marginTop : -50 , padding : 20, borderWidth : 1, borderColor : 'gray', borderRadius : 20, backgroundColor : 'white' }}>
      {/* View ก้อนที่ 1 */}
      <View style={{ backgroundColor : '#eeeeee', padding : 10 , borderRadius : 10 }} >
        <TextInput style={{ fontSize : 20 }} placeholder="What're you looking for ?" />
      </View>
      {/* View ก้อนที่ 2 */} 
      <View style={{ flexDirection : "row", marginTop : 10 , justifyContent : "space-around" }}>
      <MyIcon2 title="Flex" name="th" size={30} color="orange" onPress={()=>{ navigation.navigate("Ex01"); }} />
      <MyIcon2 title="Travel" name="plane" size={30} color="orange" onPress={()=>{ navigation.navigate("Travel"); }} />
      <MyIcon2 title="Resort" name="bed" size={30} color="orange" onPress={ ()=>{ navigation.navigate("Resort") }} />
      <MyIcon2 title="Health" name="heart" size={30} color="orange"onPress={ ()=>{ navigation.navigate("Health") }} />
      </View>
      {/* View ก้อนที่ 3 */}
      <View style={{ flexDirection : "row", marginTop : 10 , justifyContent : "space-around" }}>
      <MyIcon2 title="Pokemon" name="bolt" size={30} color="orange" onPress={()=>{ navigation.navigate("PokemonTab"); }} />
      <MyIcon2 title="Book Store" name="cubes" size={30} color="orange" onPress={ ()=>{ navigation.navigate("Book")}} />
      <MyIcon2 title="Location" name="map-marker" size={30} color="orange" onPress={ ()=>{ navigation.navigate("Location") }}  />
        <MyIcon2 title="More" name="ellipsis-h" size={30} color="orange" />
      </View>
      {/* View ก้อนที่ 4 */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
                <MyIcon2 title="YourHealth" name="user-circle" size={30} color="orange" onPress={ ()=>{ navigation.navigate("YourHealth") }} />
                <MyIcon2 title="TodoList" name="list" size={30} color="orange" onPress={ ()=>{ navigation.navigate("TodoList") }} />
                <MyIcon2 title="xxx" name="question" size={30} color="orange" onPress={ ()=>{ navigation.navigate("xxx") }} />
                <MyIcon2 title="xxx" name="question" size={30} color="orange" onPress={ ()=>{ navigation.navigate("xxx") }}  />
      </View>
    </View>
  );
}