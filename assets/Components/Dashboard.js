import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView
} from "react-native";
import { Header } from "react-native-elements";
import BellIcon from "react-bell-icon";
import UserImage from "./User-image";
// import Icon from "react-native-vector-icons/Ionicons";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import TabBar from "./TabBar";
import styles from "./Common";
import Icon from 'react-native-vector-icons/FontAwesome';


class Dashboard extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={CssStyle.Container}>
        <View style={CssStyle.header}>
          <View style={CssStyle.headerContent}>
          <Icon name="bars" size={25} color="white" />
            <View>
              <Image
                style={CssStyle.avatar}
                source={require("/home/sakshi/Documents/React-native/Quizzido-app/quizzido/assets/img/admin.png")}
              />
              <Icon name="pencil" size={25} color="orange" style = {{position: 'absolute', top: 70, left: 80, borderColor: 'white'}}/>
              <Text style={CssStyle.name}>Reyansh Singhania</Text>
            </View>

            <Icon name="bell" size={25} color="white" />
          </View>
        </View>
        <View style={CssStyle.bodyBlock}>
          <View style={CssStyle.cardBlock}>
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
                <Icon
                  name="handshake-o"
                  size={30}
                  color="orange"
                  style={{ textAlign: "center" }}
                />
                <Text style={styles.CardText}>Challenge</Text>
                <Text style={styles.CardValue}>5</Text>
              </View>
              <View style={{ width: "33%" }}>
                <Icon
                  name="graduation-cap"
                  size={30}
                  color="orange"
                  style={{ textAlign: "center" }}
                />
                <Text style={styles.CardText}>Enroll</Text>
                <Text style={styles.CardValue}>2</Text>
              </View>
              <View style={{ width: "33%" }}>
                <Icon
                  name="trophy"
                  size={30}
                  color="orange"
                  style={{ textAlign: "center" }}
                />
                <Text style={styles.CardText}>Reward</Text>
                <Text style={styles.CardValue}>10</Text>
              </View>
            </View>
          </View>
          <View style={CssStyle.blockInfo}>
            <View style={styles.blockInfoData}>
              <Image
                source={require("/home/sakshi/Documents/React-native/Quizzido-app/quizzido/assets/img/quiz.png")}
                style={styles.LogoImage}
              />
              <Text style={styles.BoldText}>Quiz</Text>
            </View>
            <View style={styles.blockInfoData}>
              <Image
                source={require("/home/sakshi/Documents/React-native/Quizzido-app/quizzido/assets/img/leaderboard.png")}
                style={styles.LogoImage}
              />
              <Text style={styles.BoldText}>Leaderboard</Text>
            </View>
            <View style={styles.blockInfoData}>
              <Image
                source={require("/home/sakshi/Documents/React-native/Quizzido-app/quizzido/assets/img/history.png")}
                style={styles.LogoImage}
              />
              <Text style={styles.BoldText}>Quiz History</Text>
            </View>
            <View style={styles.blockInfoData}>
              <Image
                source={require("/home/sakshi/Documents/React-native/Quizzido-app/quizzido/assets/img/list.png")}
                style={styles.LogoImage}
              />
              <Text style={styles.BoldText}>Friend List</Text>
            </View>
          </View>
        </View>
        <View style={CssStyle.footer}>
          <TabBar />
        </View>
      </View>
    );
  }
}

export default Dashboard;

const CssStyle = StyleSheet.create({
  Container: {
    backgroundColor: "rgb(63, 72, 204)",
    height: "100%"
  },
  // headerBlock: {
  //   backgroundColor: "rgb(63, 72, 204)",
  //   height: 300,
  //   flex: 1
  // },
  header: {
    backgroundColor: "#3F48CC",
    height: "18%",
    marginTop: "15%"
  },

  headerContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 3,
    borderColor: "white",
    textAlign: "center"
  },
  name: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center"
  },
  bodyBlock: {
    backgroundColor: "#fff",
    height: "68%",
    borderRadius: 20,
    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0,
    paddingBottom: 20
  },
  cardBlock: {
    backgroundColor: "white",
    textAlign: "center",
    height: 100,
    marginRight : 'auto',
    marginLeft: 'auto',
    marginBottom: 0,
    marginTop: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width:'80%'
  },
  blockInfo: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap"
  },
  LogoImage: {
    width: 150,
    height: 150
  },

  footer: {
    height: "10%",
    zIndex: 1000
  }
});
