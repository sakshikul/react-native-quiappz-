import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  Button,
  Linking
} from "react-native";
import { Form, TextValidator, FormItem } from "react-native-validator-form";
import A from "react-native-a";
const width = Dimensions.get("window").width;

export default class Login extends React.Component {
    static navigationOptions = {
        header: null
    }
  state = {
    email: null,
    password: null
  };
  handleChange = email => {
    this.setState({ email });
  };

  handlePassword = event => {
    const { user } = this.state;
    this.state.password = event.nativeEvent.text;
    this.setState({ user });
  };
  render() {
    const { navigate } = this.props.navigation;
    const { email } = this.state;
    return (
      <View style = {styles.Container}>
        <Image
          source={require("/home/sakshi/Documents/React-native/Quizzido-app/quizzido/assets/img/logo.png")}
          style={styles.LogoImage}
        />
        <Form ref="form" onSubmit={this.handleSubmit}>
          <TextValidator
            name="email"
            validators={["required", "isEmail"]}
            errorMessages={["This field is required", "Email invalid"]}
            placeholder="Email"
            placeholderTextColor="grey"
            value={email}
            onChangeText={this.handleChange}
            style={styles.LoginInput}
          />

          <TextValidator
            name="password"
            label="text"
            secureTextEntry
            validators={["required"]}
            errorMessages={["This field is required"]}
            type="text"
            placeholderTextColor="grey"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handlePassword}
            style={styles.LoginInput}
          />
          <Text style={styles.forgotPwd}>
            Forgot Password ?
          </Text>
          <TouchableOpacity>
            <Text style={styles.LoginBtn} onPress={() => navigate("Dashboard")}>
              Login
            </Text>
          </TouchableOpacity>
        </Form>

        <Text style={styles.CreateAccount}>
          Don't have an account ? 
           <A style={styles.forgotPwd} href="#">
            Sign up
          </A> 
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
Container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
    
},
  LogoImage: {
    width: 240,
    height: 55,
    marginBottom: 30
  },

  LoginInput: {
    padding: 10,
    marginTop: 30,
    borderRadius: 3,
    borderEndWidth: 0,
    minWidth: '88%',
    maxWidth: '100%'


    


  },
  forgotPwd: {
    color: "#3F48CC",
    textAlign: "center",
    marginTop: 10
  },
  LoginBtn: {
    backgroundColor: "#3F48CC",
    color: "white",
    padding: 15,
    fontWeight: "bold",
    borderRadius: 3,
    textAlign: "center",
    marginTop: 50,
    fontSize: 15
  },
  CreateAccount: {
    color: "black",
    textAlign: "center",
    marginTop: 15
  }
});
