import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import {  Text, TextInput, View } from "react-native";



export default function Bmi() {
  const [weight, setWeight] = useState("50");
  const [height, setHeight] = useState("170");
  const [bmi, setBmi] = useState("0");
  const [DCSE, setdcse] = useState("0");
  console.log("STATE : ", weight, height, bmi);
  
  const onPressButton = () => {
    console.log("Calculate button is pressed!!!");
    let output = (weight/ (height/100 * height/100));
    setBmi(output.toFixed(2));
    //setdcse(Description.toFixed(2));
    console.log(bmi);
    console.log(output);

    let Description = "";
        if (bmi<18.5)
            Description ="Underweight - eat a bagel!";
        else if (bmi>=18.5 && bmi<=24.99)
            Description ="Normal - keep it up!";
        else if (bmi>=25 && bmi<=29.99)
            Description ="Overweight - exercise more!";
        else if (bmi>=30 && bmi<=39.99)
            Description ="Obese - get off the couch!";
        else if (bmi>=40)
            Description ="Morbidly Obese - take action!";
        else Description ="Please check your input values, BMI cannot be calculated.";
    //setdcse(Description.toFixed(2));
        setdcse(Description);
    };

    


  return (
    <View>
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          height: 100,
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text>Weight (kg.)</Text>
        <TextInput
          style={{ fontSize: 20 }}
          keyboardType="numeric"
          placeholder="Input your weight"
          value={weight}
          onChangeText={ (newWeight) => setWeight(newWeight) }
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          height: 100,
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text>Height (cm.)</Text>
        <TextInput
          style={{ fontSize: 20 }}
          keyboardType="numeric"
          placeholder="Input your height"
          value={height}
          onChangeText={ (newHeight) => setHeight(newHeight) }
        />
      </View>
      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
            backgroundColor: "white",
            flex: 1,
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text >{bmi}</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
            backgroundColor: "white",
            flex: 1,
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text  >{ DCSE }</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPressButton}>
            <View style={{ padding: 20, backgroundColor: "#004683", borderRadius: 40 }}>
                <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                    Calculate
                </Text>
            </View>
        </TouchableOpacity>

    </View>
  );
}
