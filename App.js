import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./assets/Components/Login.js";
import Dashboard from "./assets/Components/Dashboard";
// import Leaderboard from "./assets/Components/Leaderboard";
// import QuizHistory from "./assets/Components/QuizHistory";
// import FriendList from "./assets/Components/FriendList";
// import Quiz from "./assets/Components/Quiz";


const MainNavigator = createStackNavigator({
  Login: { screen: Login },
  Dashboard: { screen: Dashboard },
  // Leaderboard: { screen: Leaderboard },
  // QuizHistory: { screen: QuizHistory },
  // FriendList: { screen: FriendList },
  // Quiz: { screen: Quiz }
});

const App = createAppContainer(MainNavigator);

export default App;
