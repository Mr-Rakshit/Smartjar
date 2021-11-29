import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Appbar from "../components/Appbar";
import Searchbar from "../components/Searchbar";
import CustomData from "../data/Jarsdata.json";
// import { BottomNavigation } from "react-native-paper";
import Card from "../components/Cards";
import { auth } from "../firebase";

const colors = {
  themeColor: "#ffffff",
  limegreen: "#f4ffe3",
  green: "#8eb44f",
  darkgreen: "#8eb44f",
  red: "#f54040",
};

// const AddRoute = () => <Text></Text>;

// const SignoutRoute = () => <Text>=</Text>;

const Dashboard = ({ navigation }) => {
  // const [index, setIndex] = useState(0);
  // const [routes, setroutes] = useState([
  //   { key: "add", title: "Add", icon: "plus" },
  //   { key: "signout", title: "Signout", icon: "album" },
  // ]);

  // const renderScene = BottomNavigation.SceneMap({
  //   add: AddRoute,
  //   signout: SignoutRoute,
  // });

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        backgroundColor: colors.themeColor,
      }}
    >
      <View style={{ flex: 0.15, backgroundColor: colors.limegreen }}>
        <Appbar name={auth.currentUser?.email} color={colors.limegreen} />
      </View>
      <View style={{ flex: 0.05 }}>
        <Searchbar />
      </View>
      <View style={{ flex: 0.25 }}>
        <Card />
      </View>
      <Text style={{ marginTop: 40 }}>heeeit</Text>

      {/* <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: colors.green }}
      >
      </BottomNavigation>  */}
      <View style={{ flexDirection: "row",flexWrap:"nowrap",justifyContent:"flex-end",alignItems:"center" }}>
        <TouchableOpacity
          onPress={() => navigation.push("JarConnect")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Jar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonText1: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
