import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase";
import { AntDesign } from "@expo/vector-icons";

import React, { useState } from "react";

const NavigationBar = () => {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState("");

  const handleSignOut = () => {
    auth
      .signOut()
      //@ts-ignore
      .then(() => navigation.replace("Login"))
      .catch((error) => alert(error.message));
  };
  
  let moveTo = (page: string) => {

    if (currentPage != page) {
      setCurrentPage(page);
      // @ts-ignore
      navigation.replace(page);
      
      console.log("i am moving",currentPage);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuItem}>
        <TouchableOpacity onPress={() => moveTo("Home")} style={styles.button}>
          <AntDesign name="home" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.menuItem}>
        <TouchableOpacity
          onPress={() => moveTo("Profile")}
          style={styles.button}
        >
          <Ionicons name="person-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.menuItem}>
        <TouchableOpacity onPress={handleSignOut}>
          <AntDesign name="logout" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    margin: 0,
    position: "absolute",
    bottom: 0,
  },
  button: { maxWidth: "50%" },
  buttonText: {
    fontWeight: "700",
    fontSize: 16,
  },
  menuItem: {
    flex: 1,
    color: "red",
    maxWidth: "50%",
    alignItems: "center",
    margin: 10,
    maxHeight: "100%",
  },
  buttonOutline: {
    backgroundColor: "white",
    borderColor: "#0782f9",
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: "#0782f9",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default NavigationBar;
