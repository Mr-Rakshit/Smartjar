import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { ScreenContainer } from "react-native-screens";
import Appbar from "../components/Appbar";
import CardsConnect from "../components/CardsConnect";
import Info from "../components/Info";

const colors = {
  themeColor: "#ffffff",
  limegreen: "#f4ffe3",
  green: "#8eb44f",
  darkgreen: "#8eb44f",
  red: "#f54040",
};

const JarConnect = () => {
  const [id, setid] = useState("");
  const [wifiEnabled, setwifiEnable] = useState("false");
  const changeState = () => {
    if (wifiEnabled === 'false') {
      setwifiEnable("true");
      console.log("he");
    }
    console.log("yes");
    console.log(wifiEnabled);
  };

  return (
    <View style={{ backgroundColor: colors.themeColor, flex: 1 }}>
      <Appbar name="Ready to Connect" color="#ffffff" />
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ padding: 10, flex: 2 }}>
          <CardsConnect />
        </View>
        <View style={{ flex: 1 }}>
          {wifiEnabled === "false" && <Info />}
          {wifiEnabled === "true" && id.length < 6 && (
            <TextInput
              label="Jar"
              value={id}
              onChangeText={(id) => setid(id)}
            />
          )}
        </View>
        <View style={{ flex: 1 }}></View>
        {/* <Button
          color="#8eb44f"
          onPress={changeState}
          style={{ marginHorizontal: 10 }}
        /> */}
        <Button
          icon=""
          mode="contained"
          style={{ backgroundColor: "#8eb44f" }}
          onPress={() => {
            changeState();
          }}
        >
          Next
        </Button>
      </View>
    </View>
  );
};
export default JarConnect;

const styles = StyleSheet.create({});