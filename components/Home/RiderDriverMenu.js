import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";

function RiderDriverMenu({onPress}) {
  const [isDriverPressed, setIsDriverPressed] = useState(false);
  const [isPassengerPressed, setIsPassengerPressed] = useState(false);

  const handleDriverPress = () => {
    setIsDriverPressed(true);
    setIsPassengerPressed(false);
    onPress("Driver Mode");
  };

  const handlePassengerPress = () => {
    setIsDriverPressed(false);
    setIsPassengerPressed(true);
    onPress("Passenger Mode");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Are you here to:</Text>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          onPress={handleDriverPress}
        >
          <View style={styles.buttonContainer}>
            <Image
              style={styles.buttonImage}
              source={require("../../assets/images/driver.png")}
            />
            <Text
              style={[styles.buttonText, isDriverPressed && styles.boldText]}
            >
              Steer the Wheel
            </Text>
          </View>
        </Pressable>
        <Text style={styles.orText}>OR</Text>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          onPress={handlePassengerPress}
        >
          <View style={styles.buttonContainer}>
            <Image
              style={styles.buttonImage}
              source={require("../../assets/images/passenger.png")}
            />
            <Text
              style={[styles.buttonText, isPassengerPressed && styles.boldText]}
            >
              Catch a ride
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default RiderDriverMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#454545",
    elevation: 5,
  },
  headText: {
    fontSize: 16,
    color: "#454545",
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  buttonContainer: {
    alignItems: "center",
    width: "100%",
  },
  button: {
    padding: 10,
    alignItems: "center",
    width: "48%", // adjust the width as needed
  },
  pressed: {
    opacity: 0.7,
  },
  boldText: {
    fontWeight: "bold",
  },
  buttonImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  buttonText: {
    color: "#454545",
  },
  orText: {
    fontSize: 16,
    marginHorizontal: 10,
    color: "#454545",
    fontWeight: "bold",
  },
});
