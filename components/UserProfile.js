import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import User from "../assets/images/user.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

function UserProfile() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedName = await AsyncStorage.getItem("userName");
        setUserName(storedName || "");
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <View
        style={{
          height: "35%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderBottomColor: "#a1a0a0",
          borderBottomWidth: 1,
          paddingBottom: 20,
          marginTop: 40,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            marginVertical: 6,
            fontWeight: "bold",
            color: "#111",
            alignSelf: "flex-start",
            marginLeft: 20,
          }}
        >
          Profile
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Image
            source={User}
            style={{
              height: 60,
              width: 60,
              borderRadius: 65,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              marginVertical: 6,
              fontWeight: "bold",
              color: "#111",
              marginLeft: 20,
            }}
          >
            {userName}
          </Text>
        </View>
      </View>
    </>
  );
}

export default UserProfile;
