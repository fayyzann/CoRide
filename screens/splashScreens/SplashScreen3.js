import React from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";
import TextButton from "../../components/UI/TextButton";
import { useNavigation } from "@react-navigation/native";

function SplashScreen3() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/splashScreensBG/prasad-panchakshari-FxiCrJTzt0w-unsplash.jpg")}
        style={styles.imageBackground}
      >
        <View style={styles.text}>
          <Text style={styles.headText}>
            Convenience and Community Building
          </Text>
          <Text style={styles.detailText}>
            CoRide simplifies ride-finding and fosters social connections during
            shared journeys, making travel enjoyable and stress-free.
          </Text>
          <TextButton
            text="Get Started"
            style={styles.button}
            onPress={() => navigation.navigate("AuthenticationScreens")}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default SplashScreen3;

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
  button: {
    marginTop: 25,
    backgroundColor: "#a4a4a431",
    width: "auto",
    alignSelf: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
