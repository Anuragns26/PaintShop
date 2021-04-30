import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import firebase from "firebase";
import { LinearGradient } from "expo-linear-gradient";

import { connect } from "react-redux";

import AccountItem from "../../components/AccountItem";

function Account(props) {
  const [user, setUser] = useState("");
  const isMounted = useRef(false);
  const onSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(console.log("Signed Out"))
      .catch((error) => alert(error));
  };
  useEffect(() => {
    isMounted.current = true;
    onSignOut;
    return () => (isMounted.current = false);
  });
  useEffect(() => {
    const { currentUser } = props;
    setUser(currentUser);
    console.log(user);
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#000", "transparent"]}
        style={styles.background}
      />
      <Text
        h2
        style={{
          marginLeft: 20,
          marginTop: 50,
          color: "white",
        }}
        h2Style={{ fontStyle: "italic" }}
      >
        {user.name}
      </Text>
      <Text
        h4
        style={{
          marginLeft: 20,
          color: "white",
        }}
        h4Style={{ fontStyle: "italic", fontWeight: "normal" }}
      >
        {user.email}
      </Text>
      <Text
        h4
        style={{
          marginLeft: 20,
          marginBottom: 0,
          color: "white",
        }}
        h4Style={{ fontStyle: "italic", fontWeight: "normal" }}
      >
        {user.phoneNumber}
      </Text>
      <View
        style={{
          width: "90%",
          height: 1,
          backgroundColor: "white",
          marginVertical: 20,
          alignSelf: "center",
        }}
      />
      <View style={{ flex: 1, alignItems: "center" }}>
        <AccountItem
          iconName="history"
          title="Order History"
          onPress={() => props.navigation.navigate("Order History")}
        />
        <AccountItem iconName="sign-out" title="Sign Out" onPress={onSignOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});
export default connect(mapStateToProps, null)(Account);
