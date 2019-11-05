import React from "react";
import { StyleSheet, Text, View, Button, Image, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import BellIcon from "react-bell-icon";
import UserImage from "./User-image";
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

class Dashboard extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.Container}>
        <Header
          style={{ height: 200, backgroundColor: "red" }}
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={<UserImage />}
          rightComponent={{ icon: "home", color: "#fff" }}
        />

        <View style={styles.bodyBlock}>
          <View style={styles.cardBlock}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View style={{ width: "33%" }}>
                <Icon name="ios-person" size={30} color="orange" />
                <Text>Challenge</Text>
                <Text>23</Text>
              </View>
              <View style={{ width: "33%" }}>
                <Icon name="reward" size={30} color="orange" />
                <Text>Reward</Text>
                <Text>23</Text>
              </View>
              <View style={{ width: "33%" }}>
                <Icon name="enrol" size={30} color="orange" />
                <Text>Enroll</Text>
                <Text>23</Text>
              </View>
            </View>
          </View>
          <View style={styles.blockInfo}>
            <View style={styles.blockInfoData}>
              <Image
                source={require("/home/sakshi/Documents/React-native/Quizzido-app/quizzido/assets/img/admin.png")}
                style={styles.LogoImage}
              />
              <Text>Quiz</Text>
            </View>
            <View style={styles.blockInfoData}>
              <Image
                source={require("/home/sakshi/Documents/React-native/Quizzido-app/quizzido/assets/img/admin.png")}
                style={styles.LogoImage}
              />
              <Text>Leaderboard</Text>
            </View>
            <View style={styles.blockInfoData}>
              <Image
                source={require("/home/sakshi/Documents/React-native/Quizzido-app/quizzido/assets/img/admin.png")}
                style={styles.LogoImage}
              />
              <Text>Quiz HIstory</Text>
            </View>
            <View style={styles.blockInfoData}>
              <Image
                source={require("/home/sakshi/Documents/React-native/Quizzido-app/quizzido/assets/img/admin.png")}
                style={styles.LogoImage}
              />
              <Text>Friend List</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Dashboard;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "rgb(63, 72, 204)",
    height: "100%"
  },
  headerBlock: {
    backgroundColor: "rgb(63, 72, 204)",
    height: 300,
    flex: 1
  },
  bodyBlock: {
    backgroundColor: "#fff",
    height: "100%",
    borderRadius: 10
  },
  cardBlock: {
    backgroundColor: "white",
    textAlign: "center",
    height: 130,
    margin: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
   blockInfo: {
    flex: 2,
    
  },
  blockInfoData: {
    
  }
});
