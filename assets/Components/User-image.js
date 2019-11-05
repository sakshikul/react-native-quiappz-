import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Header, Icon  } from "react-native-elements";




class UserImage extends React.Component {
  
  render() {
    return (
      <View style={styles.Container}>
         <Image
          source={require("/home/sakshi/Documents/React-native/Quizzido-app/quizzido/assets/img/admin.png")}
          style={styles.LogoImage}
        />
        <Text>Reyansh Sinhayania</Text>
      </View>
    );
  }
}

export default UserImage;

const styles = StyleSheet.create({

//   LogoImage: {
//     width: 240,
//     height: 240,
    
    
//   },
  

});
