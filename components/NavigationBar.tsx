import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuItem}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>home</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuItem}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>home</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuItem}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    top: 0,
    display: "flex",
    flexDirection: "row",
  },
  button: { maxWidth: "50%" },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  menuItem: {
    flex: 1,
    backgroundColor: "yellow",
    color: "red",
    maxWidth: "25%",
    alignItems: "center",
    margin: 10,
    maxHeight: "10%",
  },
});

export default NavigationBar;
