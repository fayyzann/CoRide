import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TextButton from "../UI/TextButton";
import { useNavigation } from "@react-navigation/native";

function RideRemainingTime({ remainingTime, onRideStart }) {
  const navigation = useNavigation();
  let content = (
    <>
      <Text style={styles.title}>Time until your departure:</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.time}>{remainingTime}</Text>
        <Text style={styles.minText}>min</Text>
      </View>
      <TextButton
        text="Cancel Ride"
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      />
    </>
  );
  if (remainingTime === 0) {
    content = (
      <>
        <Text style={styles.title}>Your trip is set to begin:</Text>
        <TextButton
          text="Let's Go!"
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={onRideStart}
        />
      </>
    );
  }
  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    width: "80%",
    elevation: 5,
    position: "absolute",
    bottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 10,
    color: "#727272",
  },
  time: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#494949",
  },
  minText: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 5,
    color: "#727272",
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#727272",
    borderRadius: 30,
    width: "60%",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default RideRemainingTime;
