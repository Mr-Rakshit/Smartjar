import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Checkbox, Paragraph } from "react-native-paper";

const Espcard = (props) => {
  const [ssid, setssid] = useState();
  const [password, setpassword] = useState();
  const [checked, setchecked] = useState(false);
  return (
    <View style={{ marginTop: 100 }}>
      <Paragraph style={{ }}>
        Network Detail
      </Paragraph>
      <TextInput
        label="Ssid"
        selectionColor="black"
        activeOutlineColor="black"
        outlineColor="black"
        activeUnderlineColor="black"
        value={ssid}
        onChangeText={(ssid) => {
          setpassword(ssid), console.log;
        }}
      />
      <TextInput
        label="Password"
        selectionColor="black"
        activeOutlineColor="black"
        outlineColor="black"
        activeUnderlineColor="black"
        value={password}
        secureTextEntry={!checked}
        onChangeText={(password) => {
          setpassword(password), console.log;
        }}
      />
      <View style={{ flexDirection: "row" }}>
        <Checkbox
          uncheckedColor="#8eb44f"
          color="#8eb44f"
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setchecked(!checked);
          }}
        />
        <View style={{ justifyContent: "center" }}>
          <Text>Show Password</Text>
        </View>
      </View>
    </View>
  );
};

export default Espcard;

const styles = StyleSheet.create({});
