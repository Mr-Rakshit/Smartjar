import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { ScreenContainer } from "react-native-screens";
import Appbar from "../components/Appbar";
import Espcard from "../components/Espcard";
import CardsConnect from "../components/CardsConnect";
import Info from "../components/Info";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import { auth } from "../firebase";
// import "firebase/compat/firestore";
import { myjson } from "../firebase";

console.log("jar..............");
console.log(myjson);
var myjson2;
const colors = {
  themeColor: "#ffffff",
  limegreen: "#f4ffe3",
  green: "#8eb44f",
  darkgreen: "#8eb44f",
  red: "#f54040",
};
const JarConnect = () => {
  const [userid, setuserid] = useState("");
  const [id, setid] = useState("");
  const [btn, setbtn] = useState(true);
  const [esp, setesp] = useState(false);
  const [svg, setsvg] = useState(true);
  const [wifiEnabled, setwifiEnable] = useState("false");
  const changeState = () => {
    if (wifiEnabled === "false") {
      setwifiEnable("true");
      console.log("he");
    }
    console.log("yes");
    console.log(wifiEnabled);
  };
  useEffect(() => {
    if (id.length > 5) {
      setesp(true);
      setsvg(true);
      myjson2 = { ...myjson, ...{ contanierid: id } };
      console.log("inside useef");
      console.log("////////////////////");
      console.log(myjson2);
    } else if (id.length >= 6 || id.length == 0) setsvg(true);
    else {
      setsvg(false);
      setbtn(false);
    }
    {
      console.log("esp");
    }
    {
      console.log(esp);
    }
    {
      console.log(id.length);
      console.log(myjson);
    }
    return () => {};
  }, [id, btn]);
  // useEffect(() => {
  //   console.log('here')
  //   if (!firebase.apps.length) {
  //     firebase.initializeApp(firebaseConfig);
  //     firebase.auth().onAuthStateChanged((user) => {
  //       if (user) {
  //         // User logged in already or has just logged in.
  //         userid = user.uid;
  //         console.log("he");
  //         console.log(userid);
  //       } else {
  //         ("User has not signed in");
  //       }
  //     });
  //     ref = firebase.firestore().collection("container");
  //   }
  //   return () => {};
  // }, []);

  return (
    <View style={{ backgroundColor: colors.themeColor, flex: 1 }}>
      <Appbar name="Ready to Connect" color="#ffffff" />
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ padding: 10, flex: 2 }}>
          {svg === true && (
            <CardsConnect name="Please turn on the Wi-Fi of Jar near you" />
          )}
        </View>
        <View style={{ flex: 1 }}>
          {wifiEnabled === "false" && <Info />}
          {wifiEnabled === "true" && id.length < 6 && (
            <TextInput
              label="Jar"
              value={id}
              selectionColor="black"
              activeOutlineColor="black"
              outlineColor="black"
              activeUnderlineColor="black"
              onChangeText={(id) => setid(id)}
            />
          )}

          {esp && <Espcard /> && console.log(myjson)}
        </View>
        <View style={{ flex: 1 }}></View>
        {/* <Button
          color="#8eb44f"
          onPress={changeState}
          style={{ marginHorizontal: 10 }}
        /> */}
        {btn === true && (
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
        )}
      </View>
    </View>
  );
};
export default JarConnect;

const styles = StyleSheet.create({});
