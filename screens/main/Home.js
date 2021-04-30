import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";

import PaintItem from "../../components/PaintItem";

import { connect } from "react-redux";
import color from "color";

function Home(props) {
  const [user, setUser] = useState("");
  const [yellow, setYellow] = useState(0);
  const [red, setRed] = useState(0);
  const [crimson, setCrimson] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);
  const [darkBlue, setDarkBlue] = useState(0);
  const [pink, setPink] = useState(0);
  const [purple, setPurple] = useState(0);
  const [orange, setOrange] = useState(0);
  const [lime, setLime] = useState(0);

  useEffect(() => {
    const { currentUser } = props;
    setUser(currentUser);
    console.log(user);
  }, []);

  const colorList = [
    {
      title: "Yellow",
      hexCode: "#ffc300",
      onPressPlus: () => {
        // setYellow(yellow + 1);
        console.log("asdf");
      },
      onPressMinus: () => {
        if (yellow > 0) {
          setYellow(yellow - 1);
        }
      },
    },
    {
      title: "Red",
      hexCode: "#c70039",
      onPressPlus: () => {
        setRed(red + 1);
      },
      onPressMinus: () => {
        if (red > 0) {
          setRed(red - 1);
        }
      },
    },
    {
      title: "Crimson",
      hexCode: "#581845",
      onPressPlus: () => {
        setCrimson(crimson + 1);
      },
      onPressMinus: () => {
        if (crimson > 0) {
          setCrimson(crimson - 1);
        }
      },
    },
    {
      title: "Blue",
      hexCode: "#4287f5",
      onPressPlus: () => {
        setBlue(blue + 1);
      },
      onPressMinus: () => {
        if (blue > 0) {
          setBlue(blue - 1);
        }
      },
    },
    {
      title: "Green",
      hexCode: "#16fa5f",
      onPressPlus: () => {
        setGreen(green + 1);
      },
      onPressMinus: () => {
        if (green > 0) {
          setGreen(green - 1);
        }
      },
    },
    {
      title: "Dark Blue",
      hexCode: "#000dfc",
      onPressPlus: () => {
        setDarkBlue(darkBlue + 1);
      },
      onPressMinus: () => {
        if (darkBlue > 0) {
          setDarkBlue(darkBlue - 1);
        }
      },
    },
    {
      title: "Pink",
      hexCode: "#e80edd",
      onPressPlus: () => {
        setPink(pink + 1);
      },
      onPressMinus: () => {
        if (pink > 0) {
          setPink(pink - 1);
        }
      },
    },
    {
      title: "Purple",
      hexCode: "#9b10eb",
      onPressPlus: () => {
        setPurple(purple + 1);
      },
      onPressMinus: () => {
        if (purple > 0) {
          setPurple(purple - 1);
        }
      },
    },
    {
      title: "Orange",
      hexCode: "#ed980e",
      onPressPlus: () => {
        setOrange(orange + 1);
      },
      onPressMinus: () => {
        if (orange > 0) {
          setOrange(orange - 1);
        }
      },
    },
    {
      title: "Lime",
      hexCode: "#bcf514",
      onPressPlus: () => {
        setLime(lime + 1);
      },
      onPressMinus: () => {
        if (lime > 0) {
          setLime(lime - 1);
        }
      },
    },
  ];
  const renderItem = ({ item }) => (
    <PaintItem
      title={item.title}
      hexCode={item.hexCode}
      onPressPlus={item.onPressPlus}
      onPressMinus={item.onPressMinus}
    />
  );

  return (
    <View style={styles.container}>
      {user == null && <View />}
      <StatusBar style="inverted" />
      <ScrollView style={{ flex: 1 }}>
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
          Paint Shop
        </Text>
        <Entypo
          name="shopping-cart"
          size={26}
          color="white"
          style={{ position: "absolute", right: 20, marginTop: 65 }}
          onPress={() => {
            props.navigation.navigate("Cart");
          }}
        />
        <View
          style={{
            width: "90%",
            height: 1,
            backgroundColor: "white",
            marginVertical: 20,
            alignSelf: "center",
          }}
        />
        <FlatList
          data={colorList}
          renderItem={renderItem}
          numColumns={2}
          horizontal={false}
          columnWrapperStyle={{ justifyContent: "space-around" }}
        />
      </ScrollView>
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
});

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});
export default connect(mapStateToProps, null)(Home);
