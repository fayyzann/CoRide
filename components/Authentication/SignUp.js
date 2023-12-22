import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TextIconButton from "../UI/TextIconButton";
import { createUser } from "../../util/auth";

function SignUp({onAuthenticate }) {
  const [name, setName] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [enteredConfirmPassword, setConfirmPassword] = useState("");

  async function handleSignup() {
    let { email, password, confirmPassword } = {
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    };
    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const passwordsAreEqual = password === confirmPassword;

    if (!emailIsValid || !passwordIsValid || !passwordsAreEqual) {
      Alert.alert("Invalid credentials", "Please enter valid credentials", [
        { text: "Okay" },
      ]);
      return;
    }
    onAuthenticate({email,password});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Sign Up</Text>
      <Text style={styles.detailText}>Create a new account</Text>
      <View style={styles.shadowContainer}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name="person" size={24} color="#898989" />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setName(text)}
              value={name}
              placeholder="Full Name"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="mail" size={24} color="#898989" />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={enteredEmail}
              placeholder="Email"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" size={24} color="#898989" />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
              value={enteredPassword}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" size={24} color="#898989" />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setConfirmPassword(text)}
              value={enteredConfirmPassword}
              placeholder="Confirm Password"
              secureTextEntry={true}
            />
          </View>
          <TextIconButton
            text="SIGN UP"
            icon="arrow-forward"
            size={30}
            color="#ffffff"
            onPress={handleSignup}
            style={styles.submitButton}
            textStyle={styles.submitButtonText}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
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
    elevation: 5,
    borderRadius: 40,
    marginTop: 20,
  },
  formContainer: {
    padding: 20,
    borderRadius: 40,
    backgroundColor: "#ffffff",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderBottomColor: "#454545",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    width: "80%",
    color: "#454545",
    marginLeft: 10,
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#454545",
    padding: 10,
    borderRadius: 40,
    marginTop: 20,
    width: "50%",
    alignSelf: "center",
  },
  submitButtonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SignUp;
