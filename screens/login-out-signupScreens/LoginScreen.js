import React, { useState } from "react";
import { Alert } from "react-native"; // Import AsyncStorage
import { loginUser } from "../../util/auth";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import AuthContent from "../../components/Authentication/AuthContent";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const dispatch = useDispatch();

  async function signinHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await loginUser(email, password);
      await AsyncStorage.setItem('Token', token);
      dispatch(authActions.login(token, email));
      setIsAuthenticating(false);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Authentication failed!",
        error.message || "Something went wrong!"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={signinHandler} />;
}

export default LoginScreen;
