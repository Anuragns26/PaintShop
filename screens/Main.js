import React, { Component } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import firebase from "firebase";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser, clearData } from "../redux/actions/index";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from "../screens/main/Home";
import CartScreen from "../screens/main/Cart";

import AccountScreen from "../screens/main/Account";
import OrderHistoryScreen from "../screens/main/OrderHistory";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const EmptyScreen = () => {
  return null;
};

export class Main extends Component {
  componentDidMount() {
    this.props.clearData();
    this.props.fetchUser();
  }

  HomeStack() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    );
  }
  AccountStack() {
    return (
      <Stack.Navigator initialRouteName="Account">
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Order History"
          component={OrderHistoryScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    );
  }

  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        labeled={false}
        barStyle={{ backgroundColor: "#000" }}
      >
        <Tab.Screen
          name="Home"
          component={this.HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={this.AccountStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});
const mapDispatchProps = (dispatch) =>
  bindActionCreators({ fetchUser, clearData }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
