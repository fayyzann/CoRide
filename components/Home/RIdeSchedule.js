import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TextButton from "../UI/TextButton";
import { Dropdown } from "react-native-element-dropdown";

function RideSchedule({ startLoc, dest, onRideSchedule }) {
  const [seatCapacity, setSeatCapacity] = useState(0);
  const [time, setTime] = useState(null);
  const [carMake, setCarMake] = useState(null);
  const [carReg, setCarReg] = useState(null);

  const data = Array.from({ length: 51 }, (_, i) => ({
    label: `${i + 10}`,
    value: i + 10,
  }));

  const decrementSeat = () => {
    if (seatCapacity > 1) {
      setSeatCapacity(seatCapacity - 1);
    }
  };

  const incrementSeat = () => {
    if (seatCapacity < 5) {
      setSeatCapacity(seatCapacity + 1);
    }
  };

  function onSubmit() {
    if (!carMake || !carReg || !seatCapacity || !time) {
      Alert.alert("Error!!", "Please fill all the fields with valid data to continue");
      return;
    }
    onRideSchedule({
      carMake,
      carReg,
      seatCapacity,
      time,
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <View style={styles.location}>
          <Ionicons name="location-sharp" size={24} color="black" />
          <Text style={styles.locText} numberOfLines={1}>
            {startLoc}
          </Text>
        </View>
        <Ionicons name="ellipsis-vertical-sharp" size={24} color="black" />
        <View style={styles.location}>
          <Ionicons name="locate-sharp" size={24} color="black" />
          <Text style={styles.locText} numberOfLines={1}>
            {dest}
          </Text>
        </View>
      </View>
      <Text style={styles.title}>Schedule Your Ride</Text>
      <View style={styles.carInfo}>
        <Text style={styles.infoText}>Enter your car's info</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Car's Make/Model"
          onChangeText={(text) => {
            setCarMake(text);
          }}
          value={carMake}
        />
        <TextInput
          style={styles.input}
          placeholder="Car's Registration Number"
          onChangeText={(text) => {
            setCarReg(text);
          }}
          value={carReg}
        />
      </View>
      <View style={styles.timeCapacityContainer}>
        <View style={styles.timeContainer}>
          <Text style={styles.timeInfoText}>You are leaving in:</Text>
          <View style={styles.timePicker}>
            <View style={styles.timeInput}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder="0"
                showsVerticalScrollIndicator={false}
                value={time}
                onChange={(item) => {
                  setTime(item.value);
                }}
                iconColor="#f1f1f1"
                renderRightIcon={() => (
                  <Ionicons
                    name="caret-down"
                    size={24}
                    color="#f1f1f1"
                    style={styles.icon}
                  />
                )}
              />
            </View>
            <Text style={styles.timeInfoText}>min</Text>
          </View>
        </View>
        <View style={styles.capacityContainer}>
          <Ionicons name="person" size={40} color="#727272" />
          <View style={styles.capacityButtons}>
            <Pressable onPress={decrementSeat}>
              <Ionicons name="remove" size={30} color="#727272" />
            </Pressable>
            <Text style={styles.capText}>{seatCapacity}</Text>
            <Pressable onPress={incrementSeat}>
              <Ionicons name="add" size={30} color="#727272" />
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        
      </View>
      <TextButton
        text="Schedule"
        style={styles.confirmButton}
        textStyle={styles.buttonText}
        onPress={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginTop: 20,
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
    marginTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#cccccc",
  },
  location: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d9d9d9",
    padding: 10,
    borderRadius: 30,
    overflow: "hidden",
  },
  locText: {
    marginLeft: 10,
    color: "#454545",
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 20,
  },
  carInfo: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#727272",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    paddingBottom: 30,
  },
  infoText: {
    color: "#ffffff",
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#f1f1f1",
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
  },
  timeCapacityContainer: {
    width: "100%",
    backgroundColor: "#727272",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 20,
  },
  timeContainer: {
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    width: "40%",
    padding: 10,
    borderRadius: 20,
  },
  timePicker: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  timeInput: {
    backgroundColor: "#727272",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    marginRight: 5,
  },
  timeInfoText: {
    fontSize: 14,
    color: "#454545",
    textAlign: "center",
  },
  timeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f1f1f1",
    marginHorizontal: 5,
  },
  capacityContainer: {
    backgroundColor: "#f1f1f1",
    width: "40%",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  capacityButtons: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  capText: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#727272",
    color: "#f1f1f1",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  confirmButton: {
    backgroundColor: "#727272",
    width: "60%",
    paddingVertical: 10,
    borderRadius: 30,
    position: "fixed",
    top: "15%",
  },
  buttonText: {
    color: "#f1f1f1",
    fontSize: 20,
    fontWeight: "bold",
  },
  dropdown: {
    height: 30,
    width: 60,
    backgroundColor: "#727272",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 20,
    color: "#f1f1f1",
  },
  selectedTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f1f1f1",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default RideSchedule;
