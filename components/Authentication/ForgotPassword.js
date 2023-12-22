import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    console.log("Forgot Password Email:", email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Forgot Password</Text>
      <Text style={styles.detailText}>
        Enter your email to reset your password
      </Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
        <Button title="Reset Password" onPress={handleForgotPassword} />
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
  formContainer: {
    padding: 20,
    backgroundColor: "#ffffff",
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
  },
});

export default ForgotPassword;
