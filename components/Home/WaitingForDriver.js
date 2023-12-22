import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import IconButton from "../UI/IconButton";
import TextButton from "../UI/TextButton";

function WaitingForDriver({ driverName, carMakeModel, carRegNum , onRideStart }) {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Driver is at your location</Text>
      <View style={styles.infoContainer}>
        <View style={styles.driverInfo}>
          <Image
            source={require("../../assets/images/driver.png")}
            style={styles.image}
          />
          <View>
            <Text style={styles.nameText}>{driverName}</Text>
            <Text style={styles.infoText}>{carMakeModel}</Text>
            <Text style={styles.infoText}>{carRegNum}</Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <IconButton icon="chatbox-ellipses" size={40} style={styles.icon} />
          <IconButton icon="call" size={40} style={styles.icon} />
        </View>
      </View>
      <TextButton
        text="Start Ride"
        textStyle={styles.buttonText}
        style={styles.buttonStyle}
        onPress={onRideStart}
      />
    </View>
  );
}

export default WaitingForDriver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  topText: {
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 20,
    width: "100%",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: '#CEC2C2',
    padding: 20,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  driverInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    marginBottom: 10,
    marginRight: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#454545",
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#454545",
  },
  iconContainer: {
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#EDEDED",
    fontWeight: "bold",
  },
  buttonStyle: {
    backgroundColor: "#727272",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 40,
    marginBottom: 20,
    width: "70%",
  },
});
