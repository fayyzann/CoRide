import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextButton from "../../components/UI/TextButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { changePassword } from "../../util/auth";

const EditProfile = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedName = await AsyncStorage.getItem("userName");
        setName(storedName || "");
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchData();
  }, []);

  const handleSaveChanges = async () => {
    try {
      AsyncStorage.setItem("userName", name);
      if (isChangePassword && oldPassword !== '' && newPassword !== '' && confirmPassword !== '' && newPassword === confirmPassword ) {
        await changePassword(oldPassword, newPassword);
      }
      else if (isChangePassword && oldPassword !== '' && newPassword !== '' && confirmPassword !== '' && newPassword !== confirmPassword ) {
        alert("New password and confirm password do not match");
      }
    } catch (error) {
      console.error("Error saving username:", error);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>
      <Text style={styles.label}>User name</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <View style={styles.passContainer}>
        <Text style={styles.label}>Password</Text>
        {!isChangePassword ? (
          <TextButton
            text="Change password"
            textStyle={styles.changePass}
            style={styles.changePassButton}
            onPress={() => {
              setIsChangePassword(true);
            }}
          />
        ) : (
          <TextButton
            text="Cancel"
            textStyle={styles.changePass}
            style={styles.changePassButton}
            onPress={() => {
              setIsChangePassword(false);
            }}
          />
        )}
      </View>
      {isChangePassword && (
        <>
          <TextInput
            style={styles.inputField}
            placeholder="old password"
            secureTextEntry
            value={oldPassword}
            onChangeText={(text) => setOldPassword(text)}
          />
          <TextInput
            style={styles.inputField}
            placeholder="new password"
            secureTextEntry
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />
          <TextInput
            style={styles.inputField}
            placeholder="confirm password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </>
      )}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#454545",
    width: "50%",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  passContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  changePassButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "red",
  },
  changePass: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default EditProfile;
