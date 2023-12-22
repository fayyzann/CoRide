import React from "react";
import {Text, StyleSheet, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function SearchBar({onPress}) {
  return (
      <Pressable style={styles.container} onPress={onPress}>
        <Ionicons name="search" size={20} color="#767676" style={styles.icon} />
        <Text style={styles.text}>Where are you going?</Text>
      </Pressable>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 13,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#454545",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: "#454545",
    fontWeight: "400",
  },
});
