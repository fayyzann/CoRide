import React from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";
import IconButton from "../../components/UI/IconButton";

function SplashScreen1({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/splashScreensBG/malte-schmidt-enGr5YbjQKQ-unsplash.jpg")}
        style={styles.imageBackground}
      >
        <View style={styles.text}>
          <Text style={styles.headText}>Cost-Efficient Ridesharing</Text>
          <Text style={styles.detailText}>
            You can enjoy affordable transportation by sharing rides and
            splitting expenses.
          </Text>
          <IconButton
            icon="chevron-forward-outline"
            size={40}
            color="white"
            iconStyle={styles.nextIcon}
            onPress={() => navigation.navigate("SplashScreen2")}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default SplashScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    padding: 20,
  },
  headText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  detailText: {
    fontWeight: "200",
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginHorizontal: 20,
  },
  nextIcon: {
    marginTop: 25,
    backgroundColor: "#a4a4a431",
    width: 60,
    alignSelf: "center",
    borderRadius: 10,
  },
});
