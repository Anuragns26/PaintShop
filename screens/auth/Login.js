import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Input, Button } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import firebase from "firebase";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(console.log("Signed In"))
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <LinearGradient
        colors={["#000", "transparent"]}
        style={styles.background}
      />
      <Input
        placeholder="Email Address"
        containerStyle={styles.input}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
        leftIcon={
          <Entypo
            name="email"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
          />
        }
        inputStyle={{ color: "white" }}
        inputContainerStyle={{ borderColor: "white" }}
        placeholderTextColor="white"
      />
      <Input
        placeholder="Password"
        secureTextEntry
        containerStyle={styles.input}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}
        leftIcon={
          <FontAwesome
            name="lock"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
          />
        }
        inputStyle={{ color: "white" }}
        inputContainerStyle={{ borderColor: "white" }}
        placeholderTextColor="white"
      />
      <Button
        title="Login"
        containerStyle={styles.button}
        raised
        onPress={onSignIn}
        buttonStyle={{ backgroundColor: "black" }}
      />
      <Button
        title="Register"
        containerStyle={styles.button}
        type="outline"
        onPress={() => {
          navigation.navigate("Register");
        }}
        raised
        titleStyle={{ color: "black" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EB5757",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  button: {
    width: "40%",
    marginBottom: 10,
  },
  input: {
    width: "80%",
  },
});

export default LoginScreen;
