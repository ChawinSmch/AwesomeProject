import React from "react";
import { ScrollView, Text, View } from "react-native";
import Signup from "../../components/week3/Signup";
import Card from "../../components/week3/Card";
import Hotel from "../../components/week3/Hotel";
// import MyIcon2 from "../../components/week3/Myicon2";
import Menu from "../../components/week3/Menu";

export default function Travel() {
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingTop: 50 }}>
        {/* <Text>Text of Week 3 </Text> */}
        <Menu/>
        <Card />
        <Hotel />
        <Signup />
        
        
        {/* <MyIcon/> */}
        {/* <MyIcon title="หัวใจ" name="heart" size={30} color="orange" />
        <MyIcon title="บ้าน" name="home" size={30} color="green" /> */}
        
      </View>
    </ScrollView>
  );
}
