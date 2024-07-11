import React from "react";
import { ScrollView, View } from "react-native";
import Top from "../../components/reviews/Top";
import Mid from "../../components/reviews/Mid";
import Bottom from "../../components/reviews/Bottom";

export default function Review(){
    return(
        <ScrollView>
            <View style={{ flex:1, paddingTop: 20 ,}}>
                <Top/>
                <Mid/>
                <Bottom/>

            </View>
        </ScrollView>
    );
}