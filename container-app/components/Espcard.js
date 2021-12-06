// import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
// import { TextInput, Checkbox, Paragraph } from "react-native-paper";

// const Espcard = (props) => {
//   const [ssid, setssid] = useState();
//   const [password, setpassword] = useState();
//   const [checked, setchecked] = useState(false);

//   return (
//     <View style={{ marginTop: 100 }}>
//       <Paragraph style={{}}>Network Detail</Paragraph>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         style={styles.container}
//       >
//         <TextInput
//           label="Ssid"
//           selectionColor="black"
//           activeOutlineColor="black"
//           outlineColor="black"
//           activeUnderlineColor="black"
//           value={ssid}
//           onChangeText={(ssid) => {
//             setpassword(ssid), console.log;
//           }}
//         />
//         <TextInput
//           label="Password"
//           selectionColor="black"
//           activeOutlineColor="black"
//           outlineColor="black"
//           activeUnderlineColor="black"
//           value={password}
//           secureTextEntry={!checked}
//           onChangeText={(password) => {
//             setpassword(password), console.log;
//           }}
//           onPress={() => {
//             console.log("You tapped the button!");
//           }}
//         />
//       </KeyboardAvoidingView>
//       <View style={{ flexDirection: "row" }}>
//         <Checkbox
//           uncheckedColor="#8eb44f"
//           color="#8eb44f"
//           status={checked ? "checked" : "unchecked"}
//           onPress={() => {
//             setchecked(!checked);
//           }}
//         />
//         <View style={{ justifyContent: "center" }}>
//           <Text>Show Password</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Espcard;

// const styles = StyleSheet.create({});

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  NativeModules,
  Dimensions,
  TextInput,
  PermissionsAndroid,
} from "react-native";
import { NetworkInfo } from "react-native-network-info";

export default class Espcard extends React.Component {
  state = {
    password: "",
    ssid: "",
    bssid: "",
  };

  componentDidMount() {
    // PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    // );

    // NetworkInfo.getBSSID().then((bssid) => {
    //   this.setState({
    //     bssid,
    //   });
    // });

    // NetworkInfo.getSSID().then((ssid) => {
    //   this.setState({
    //     ssid,
    //   });
    // });
  }


  handleSSID = (text) => {
    this.setState({ ssid: text });
  };

  handlePassword = (text) => {
    this.setState({ password: text });
  };

  onPressStart = () => {
    var espBridge = NativeModules.ESPBridge;
    console.log(espBridge)
    console.log('hey')
    var type = "esptouch";
    var deviceSSID = this.state.ssid;
    var deviceBSSID = this.state.bssid;
    var wifiPassword = this.state.password;

    espBridge
      .start({
        type: type,
        ssid: deviceSSID,
        bssid: deviceBSSID,
        password: wifiPassword,
        timeout: 50000,
        taskCount: 1,
      })
      .then(function (results) {
        console.log(results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onPressStop = () => {
    var espBridge = NativeModules.ESPBridge;
    espBridge.stop();
  };

  render() {
    const screenHeight = Math.round(Dimensions.get("window").height);
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View
            style={[styles.buttonsContainer, { marginTop: screenHeight / 3 }]}
          >
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="SSID"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.handleSSID}
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Wifi Password"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.handlePassword}
            />
            <TouchableOpacity
              onPress={this.onPressStart}
              style={styles.buttonStyle}
              disabled={this.state.password === "" ? true : false}
            >
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                Start ESP Bridge
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.onPress}
              style={[styles.buttonStyle, { marginTop: 20 }]}
            >
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                Stop ESP Bridge
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  buttonsContainer: {
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "#7892c2",
    elevation: 10,
    padding: 20,
    borderRadius: 10,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
    width: "70%",
  },
});

