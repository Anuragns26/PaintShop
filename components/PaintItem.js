import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";

function PaintItem({ title, hexCode, onPressPlus, onPressMinus }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 110,
          width: 110,
          borderRadius: 55,
          backgroundColor: hexCode,
          marginTop: 20,
          marginBottom: 15,
          elevation: 7,
        }}
      />
      <Text style={[styles.text, { fontSize: 16 }]}>{title}</Text>
      <Text style={styles.text}>{hexCode}</Text>
      <Text style={{ margin: 7, fontSize: 15, fontWeight: "bold" }}>
        ₹100/Unit
      </Text>
      <View
        style={{
          width: "90%",
          height: 0.5,
          margin: 5,
          backgroundColor: "grey",
          alignSelf: "center",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Entypo name="minus" size={24} color="black" onPress={onPressPlus} />
        <Text
          style={{ fontSize: 16, fontWeight: "bold", marginHorizontal: 15 }}
        >
          Add
        </Text>
        <Entypo name="plus" size={24} color="black" onPress={onPressMinus} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 270,
    backgroundColor: "white",
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: "grey",
    elevation: 3,
    marginBottom: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    marginBottom: 1,
  },
});

export default PaintItem;
