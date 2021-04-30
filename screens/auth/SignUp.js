import React, { useState } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import firebase from "firebase";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function SignUpScreen(props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const onSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          name,
          phoneNumber,
          email,
          createdAt: new Date(),
        };
        firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .set(data)
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="auto" />
      <LinearGradient
        colors={["#000", "transparent"]}
        style={styles.background}
      />
      <Text h4 style={{ marginBottom: 50, color: "white" }}>
        Please enter your details
      </Text>
      <Input
        placeholder="Full Name"
        containerStyle={styles.input}
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
        autoFocus
        leftIcon={
          <FontAwesome
            name="user"
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
        placeholder="Phone Number"
        containerStyle={styles.input}
        value={phoneNumber}
        onChangeText={(text) => {
          setPhoneNumber(text);
        }}
        leftIcon={
          <FontAwesome
            name="phone"
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
      <Input
        placeholder="Address"
        containerStyle={styles.input}
        value={address}
        onChangeText={(text) => {
          setAddress(text);
        }}
        leftIcon={
          <FontAwesome
            name="address-book"
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
        title="Register"
        containerStyle={styles.button}
        raised
        onPress={onSignUp}
        buttonStyle={{ backgroundColor: "black" }}
      />
      {/* <View style={{ height: 100 }} /> */}
    </KeyboardAvoidingView>
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

export default SignUpScreen;
