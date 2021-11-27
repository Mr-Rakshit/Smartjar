// import Smartconfig from 'react-native-smartconfig';

// Smartconfig.start({
//   type: 'esptouch', //or airkiss, now doesn't not effect
//   ssid: 'droot',
//   bssid: "", //"" if not need to filter (don't use null)
//   password: 'droot1902',
//   timeout: 50000 //now doesn't not effect
// }).then(function(results){
//   //Array of device success do smartconfig
//   console.log(results);
//   /*[
//     {
//       'bssid': 'device-bssi1', //device bssid
//       'ipv4': '192.168.1.11' //local ip address
//     },
//     {
//       'bssid': 'device-bssi2', //device bssid
//       'ipv4': '192.168.1.12' //local ip address
//     },
//     ...
//   ]*/
// }).catch(function(error) {

// });

// Smartconfig.stop(); //interrupt task
import RNEsptouch from "react-native-esptouch";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  componentDidMount() {
    RNEsptouch.initESPTouch();
  }

  componentWillUnmount() {
    RNEsptouch.finish();
  }

  onPress() {
    let connected_wifi_password = "123456";
    let broadcast_type = 1; // 1: broadcast;	0: multicast
    RNEsptouch.startSmartConfig(connected_wifi_password, broadcast_type).then(
      (res) => {
        if (res.code == 200) {
          // ESPTouch success
        } else {
          // ESPTouch failed
          console.info(res.msg);
        }
      }
    );
  }

  render() {
    return (
      <View>
        <Button title="test" onPress={this.onPress} />
      </View>
    );
  }
}
export default Demo;
