import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text } from "react-native";
import firebase from "firebase";

function Cart(props) {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cart;
