import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ScrollView
  } from "react-native";
  import Icon from 'react-native-vector-icons/FontAwesome';



class TabBar extends React.Component {
    render(){
        return(
            <View style = {styles.Container}>
                <Icon name="camera-timer" size={25} color="orange" />
                <Icon name="questioncircle" size={25} color="orange" />
                <Icon name="bars" size={25} color="orange" />
                <Icon name="back-in-time" size={25} color="orange" />
                <Icon name="users" size={25} color="orange" />
                <Icon name="user-circle-o" size={25} color="orange" />
            </View>
        )
    }
}

export default TabBar;


const styles = StyleSheet.create({
Container: {
    flex : 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    color: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 7,
    paddingBottom: 50,
    paddingTop: 30
}
})