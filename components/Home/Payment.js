import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Pressable } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import TextButton from "../UI/TextButton";
import { useState } from "react";

function Payment({ onSubmitPayment }) {
  const slideUpAnimation = useRef(new Animated.Value(1000)).current;
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    Animated.timing(slideUpAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [slideUpAnimation]);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const isOptionSelected = (option) => {
    return option === selectedOption;
  };

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: slideUpAnimation }] },
      ]}
    >
      <Text style={styles.title}>How are you going to pay?</Text>
      <View style={styles.paymentOptions}>
        <Pressable
          style={({ pressed }) => [
            styles.paymentOption,
            isOptionSelected("Credit Card") && styles.selectedOption,
            pressed && styles.pressed,
          ]}
          onPress={() => handleOptionPress("Credit Card")}
        >
          <FontAwesome name="credit-card" size={24} style={styles.icon} />
          <Text style={styles.optionText}>Credit Card</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.paymentOption,
            isOptionSelected("Cash") && styles.selectedOption,
            pressed && styles.pressed,
          ]}
          onPress={() => handleOptionPress("Cash")}
        >
          <FontAwesome name="money" size={24} style={styles.icon} />
          <Text style={styles.optionText}>Cash</Text>
        </Pressable>
        {selectedOption !== null && (
          <TextButton
            text="Confirm"
            style={styles.textButtonStyle}
            textStyle={styles.textButtonText}
            onPress={onSubmitPayment}
          />
        )}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "40%",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 20,
    alignSelf: "center",
  },
  pressed: {
    opacity: 0.8,
  },

  paymentOptions: {
    alignItems: "center",
  },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "90%",
    elevation: 2,
    backgroundColor: "#f1f1f1",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#f1f1f1",
  },
  selectedOption: {
    borderColor: "#3f3f3f",
    elevation: 5,
  },
  icon: {
    marginRight: 10,
    color: "#3f3f3f",
  },
  optionText: {
    fontSize: 20,
    color: "#3f3f3f",
  },
  textButtonText: {
    color: "#ffffff",
    fontSize: 20,
  },
  textButtonStyle: {
    backgroundColor: "#727272",
    fontWeight: "bold",
    textAlign: "center",
    width: "60%",
    padding: 10,
    borderRadius: 30,
  },
});

export default Payment;
