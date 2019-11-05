import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./assets/Components/Login.js";
import Dashboard from "./assets/Components/Dashboard";

const MainNavigator = createStackNavigator({
  Login: { screen: Login },
  Dashboard: { screen: Dashboard }
});

const App = createAppContainer(MainNavigator);

export default App;
