import React,{ useState, useEffect} from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";

export default function Event(props) {   
    
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try{
            let text = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await text.json();
            console.log("Load Data : " , data);
          //SET STATE
            setOnlineTours(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }
    useEffect(() => {
        loadOnlineTours();
    }, []);
    
    return (
        <View style={props.style}>
            <Text style={{ fontSize : 20 }}>Up coming Event</Text>
            <Text style={{ color:"grey" }}>Let find out what most interesting things</Text>

            <FlatList
                horizontal={true}
                data={ onlineTours }
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight : 10  }}>
                                <View>
                                    <Image style={{ width : Dimensions.get("screen").width/1.5, height :250,  borderRadius:10 }} source={{ uri : item.uri}} />
                                <View style={{ flexDirection:"row",marginTop : -30, height : 125 , width: Dimensions.get("screen").width/1.5, paddingHorizontal : 10, backgroundColor : 'lightyellow',  borderBottomLeftRadius : 10 , borderBottomRightRadius : 10 }}>
                                    <View style={{padding:10}}>
                                        <Text style={{ fontSize:25, color : "red" , textAlign:"center"}}>{ item.month}</Text>
                                        <Text style={{ fontSize:20, color : "gray", textAlign:"center"}}>{ item.date}</Text>
                                    </View>
                                    <View style={{padding:10}}>
                                        <Text style={{fontSize:23 , color :"black"}}>{item.title}</Text>
                                        <Text style={{color:'gray'}}>{item.datetime}</Text>
                                        <Text style={{color:'gray'}}>{item.place}</Text>
                                    </View>
                                </View>            
                                </View>
                            </View>
                            // <TourItem item={item} index={index} />
                        );
                    }
                }
                keyExtractor={item => item.id}
            />

        </View>
    );
}
