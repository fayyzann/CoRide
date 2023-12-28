import React, { useState} from "react";
import { Alert } from "react-native";
import { createUser } from "../../util/auth";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import AuthContent from "../../components/Authentication/AuthContent";

function SignupScreen({ navigation }) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ email, password,name }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password , name);
      setIsAuthenticating(false);
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
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
