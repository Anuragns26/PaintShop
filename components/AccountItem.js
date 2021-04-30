import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { Octicons } from "@expo/vector-icons";

function AccountItem({ iconName, title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Octicons name={iconName} size={26} color="black" />
      <Text h4 h4Style={{ fontWeight: "normal", marginLeft: 10 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
    elevation: 3,
    marginBottom: 15,
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },
  text: {
    fontSize: 14,
    marginBottom: 1,
  },
});

export default AccountItem;
