import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [slideAnim] = useState(new Animated.Value(-300)); // Initial position outside the screen

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const toValue = isOpen ? -300 : 0; // Slide in (-300) or out (0)
    Animated.timing(slideAnim, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu}>
        <Text>Toggle Menu</Text>
      </TouchableOpacity>
      <Animated.View
        style={[styles.sideMenu, { transform: [{ translateX: slideAnim }] }]}
      >
        {/* Your side menu content goes here */}
        <Text>Side Menu Content</Text>
      </Animated.View>
      <View style={styles.mainContent}>
        {/* Your main content goes here */}
        <Text>Main Content</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  sideMenu: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 250,
    backgroundColor: "lightgray",
    padding: 20,
  },
  mainContent: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SideMenu;
