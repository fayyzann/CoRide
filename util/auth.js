import axios from "axios";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_KEY = "AIzaSyCFJba_NRqyipTga5l5_aneMFzE-Z6OGM4";

async function authenticate(mode, email, password, name = null) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  if (mode === "signInWithPassword") {
    const username = await getUserName(response.data.localId);
    await AsyncStorage.setItem("userName", JSON.stringify(username));
    await AsyncStorage.setItem("userEmail", email);
  }
  if (mode === "signUp" && name) {
    await createUserInFirestore(response.data.localId, name);
  }
  return response.data.idToken;
}

export function createUser(email, password, name) {
  return authenticate("signUp", email, password, name);
}

export function loginUser(email, password) {
  return authenticate("signInWithPassword", email, password);
}

export function resetPassword(email) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`;
  return axios.post(url, {
    requestType: "PASSWORD_RESET",
    email: email,
  });
}

async function createUserInFirestore(userId, username) {
  try {
    const firestoreApiUrl =
      "https://firestore.googleapis.com/v1/projects/coride-dfbfd/databases/(default)/documents";
    const documentData = {
      fields: {
        uid: { stringValue: userId },
        username: { stringValue: username },
      },
    };

    const response = await axios.post(
      `${firestoreApiUrl}/User?key=${API_KEY}`,
      {
        fields: documentData.fields,
      }
    );
  } catch (error) {
    Alert.alert("Authentication failed!", "Something went wrong!");
  }
}

async function getUserName(userId) {
  try {
    const firestoreApiUrl =
      "https://firestore.googleapis.com/v1/projects/coride-dfbfd/databases/(default)/documents";
    const response = await axios.get(`${firestoreApiUrl}/User?key=${API_KEY}`);
    const documents = response.data.documents;
    return response.data.documents.find(
      (user) => user.fields.uid.stringValue === userId
    ).fields.username.stringValue;
  } catch (error) {
    console.error("Error fetching username:", error);
    return null;
  }
}


function firebaseChangePassword(token, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`;
  return axios.post(url, {
    idToken: token,
    password: password,
    returnSecureToken: true,
  });
}

export async function changePassword(oldPassword, newPassword) {
  try {
    const email = await AsyncStorage.getItem("userEmail");
    const token = await authenticate(
      "signInWithPassword",
      email,
      oldPassword
    );
    await firebaseChangePassword(token, newPassword);
  } catch (error) {
    Alert.alert("Error changing password!!", 'Incorrect password');
  }
}
