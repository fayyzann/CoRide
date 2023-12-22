import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { useState, useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import TextIconButton from "../UI/TextIconButton";
import { useNavigation } from "@react-navigation/native";

function Login({ onAuthenticate }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassScreen");
  };

  const handleLogin = () => {
    onAuthenticate({ email, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Login</Text>
      <Text style={styles.detailText}>Please sign in to continue</Text>
      <View style={styles.shadowContainer}>
        <View style={styles.formContainer}>
          <View style={styles.emailContainer}>
            <Ionicons name="mail" size={24} color="#898989" />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="EMAIL"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.passContainer}>
            <Ionicons name="lock-closed" size={24} color="#898989" />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="PASSWORD"
              secureTextEntry={true}
            />
          </View>
          <Pressable onPress={handleForgotPassword}>
            <Text style={styles.forgotButton}>Forgot Password?</Text>
          </Pressable>
          <TextIconButton
            text="LOGIN"
            icon="arrow-forward"
            size={30}
            color="#ffffff"
            onPress={handleLogin}
            style={styles.submitButton}
            textStyle={styles.submitButtonText}
          />
        </View>
      </View>
    </View>
  );
}

export default Login;

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
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 10,
    elevation: 5,
    borderRadius: 40,
    marginTop: 20,
    
  },
  formContainer: {
    padding: 20,
    borderRadius: 40,
    backgroundColor: "#ffffff",
    paddingTop: 40,
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
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  passContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#454545",
    fontSize: 14,
    textAlign: "center",
  },
  forgotButton: {
    alignSelf: "flex-end",
    color: "#454545",
    textDecorationLine: "underline",
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
