import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../../components/UI/IconButton";
import TextButton from "../../components/UI/TextButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedName = await AsyncStorage.getItem("userName");
        const storedEmail = await AsyncStorage.getItem("userEmail");
        setName(storedName || "");
        setEmail(storedEmail || "");
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchData();
  }, []);
  const handleLogout = async () => {
    await AsyncStorage.removeItem("Token");
    await AsyncStorage.removeItem("userName");
    await AsyncStorage.removeItem("userEmail");
    dispatch(authActions.logout());
  };

  const handleDeleteAccount = () => {
    // Delete account logic
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon="chevron-back"
          size={30}
          color="black"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <TextButton
          text="Edit account"
          textStyle={styles.editButton}
          onPress={() => {
            navigation.navigate("EditProfileScreen");
          }}
        />
      </View>
      <View style={styles.userInfo}>
        <Image
          source={require("../../assets/images/user.png")}
          style={styles.userImage}
        />
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userEmail}>{email}</Text>
        <View style={styles.borderBottom} />
      </View>
      <TouchableOpacity style={styles.actionButton} onPress={handleLogout}>
        <Ionicons name="log-out" size={24} color="black" />
        <Text style={styles.actionButtonText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={handleDeleteAccount}
      >
        <Ionicons name="trash" size={24} color="black" />
        <Text style={styles.actionButtonText}>Delete your account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  editButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#454545",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  userInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#454545",
  },
  userEmail: {
    marginBottom: 15,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
    marginBottom: 15,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingLeft: 10,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#454545",
  },
});

export default ProfileScreen;
