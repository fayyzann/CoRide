import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import IconButton from "../UI/IconButton";
import { useNavigation } from "@react-navigation/native";

const trips = [
  {
    pickUp: "Main Market, Gulberg",
    destination: "Meezan Bank, G-Block, Johar Town",
  },
  {
    pickUp: "Meezan Bank, G-Block, Johar Town",
    destination: "Main Market, Gulberg",
  },
  {
    pickUp: "Main Market, Gulberg",
    destination: "Meezan Bank, G-Block, Johar Town",
  },
  {
    pickUp: "Main Market, Gulberg",
    destination: "Meezan Bank, G-Block, Johar Town",
  },
  {
    pickUp: "Main Market, Gulberg",
    destination: "Meezan Bank, G-Block, Johar Town",
  },
  {
    pickUp: "Main Market, Gulberg",
    destination: "Meezan Bank, G-Block, Johar Town",
  },
  {
    pickUp: "Main Market, Gulberg",
    destination: "Meezan Bank, G-Block, Johar Town",
  },
  {
    pickUp: "Main Market, Gulberg",
    destination: "Meezan Bank, G-Block, Johar Town",
  },
  {
    pickUp: "Main Market, Gulberg",
    destination: "Meezan Bank, G-Block, Johar Town",
  },
];
function RecentTrips({ rideMode }) {
  const navigation = useNavigation();

  function navivationHandler() {
    if (rideMode === "Passenger Mode") {
      navigation.navigate("PassengerScreen");
    } else if (rideMode === "Driver Mode") {
      navigation.navigate("DriverScreen");
    } else {
      Alert.alert("Error", "Please select a mode first");
    }
  }
  const renderItem = ({ item }) => (
    <Pressable
      style={({ pressed }) => [styles.tripItem, pressed && styles.pressed]}
      onPress={navivationHandler}
    >
      <Text style={styles.locText}>{item.pickUp}</Text>
      <IconButton icon="ellipsis-vertical-sharp" size={20} color="#7a7a7a" />
      <Text style={styles.locText}>{item.destination}</Text>
    </Pressable>
  );

  return (
    <FlatList
      data={trips}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default RecentTrips;

const styles = StyleSheet.create({
  tripItem: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d9d9d9",
    borderRadius: 30,
    marginVertical: 5,
    marginHorizontal: 20,
    elevation: 2,
  },
  locText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.5,
  },
});
