import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TextButton from "../../components/UI/TextButton";
import Login from "./Login";
import SignUp from "./SignUp";
import { useNavigation } from "@react-navigation/native";

function AuthContent({isLogin , onAuthenticate}) {
  const navigation = useNavigation();
  const bottomText = isLogin ? "Don't have an account?" : "Already have an account?";
  const bottomLink = isLogin ? "Sign Up" : "Login";
  

  const toggleAuthenticationScreen = () => {
    navigation.navigate(isLogin ? "SignupScreen" : "LoginScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        {isLogin ? <Login onAuthenticate={onAuthenticate}/> : <SignUp onAuthenticate={onAuthenticate}/>}
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.bottomText}>{bottomText}</Text>
        <TextButton text={bottomLink} textStyle={styles.textButtonStyle} onPress={toggleAuthenticationScreen} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  bottomText: {
    color: "#454545",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
  },
  textButtonStyle: {
    color: "#454545",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AuthContent;
