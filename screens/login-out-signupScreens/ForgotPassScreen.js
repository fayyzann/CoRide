import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import TextButton from "../../components/UI/TextButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import { resetPassword } from "../../util/auth";
import { Alert } from "react-native";
import LoadingOverlay from "../../components/UI/LoadingOverlay";

function ForgotPassScreen({ navigation}) {
  const [email, setEmail] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function handleForgotPassword() {
    setIsAuthenticating(true);
    try {
      await resetPassword(email);
      setIsAuthenticating(false);
      Alert.alert("Password reset email sent successfully");
      navigation.replace("LoginScreen");
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        error.message || "Something went wrong!"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Sending email..." />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Forgot Password</Text>
      <Text style={styles.detailText}>
        Enter your email to reset your password
      </Text>
      <View style={styles.shadowContainer}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name="mail" size={24} color="#898989" />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Enter your email"
              keyboardType="email-address"
            />
          </View>
          <TextButton
            text="Reset Password"
            onPress={handleForgotPassword}
            style={styles.buttonStyle}
            textStyle={styles.buttonText}
          />
        </View>
      </View>
      <TextButton
        text="Back to Login"
        onPress={() => {navigation.navigate("LoginScreen")}}
        style={styles.cancelButtonStyle}
        textStyle={styles.cancelButtonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#ffffff",
  },
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#454545",
  },
  detailText: {
    fontSize: 18,
    fontWeight: "300",
    color: "#454545",
  },
  shadowContainer: {
    shadowColor: "#454545",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    marginTop: 20,
  },
  inputContainer:{
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  formContainer: {
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderBottomColor: "#454545",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    color: "#454545",
    marginBottom: 20,
    fontWeight: "500",
    width: "80%",
    marginLeft: 10,
  },
  buttonStyle: {
    backgroundColor: "#454545",
    padding: 10,
    borderRadius: 40,
    // marginTop: ,
    width: "80%",
    alignSelf: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  cancelButtonStyle: {
    backgroundColor: "#ffffff",
    borderRadius: 40,
    marginTop: 10,
    width: "80%",
    alignSelf: "center",
  },
  cancelButtonText: {
    color: "#454545",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomColor: "#454545",
    borderBottomWidth: 1,
  },
});

export default ForgotPassScreen;
