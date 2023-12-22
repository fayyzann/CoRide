import React, { useState, useEffect } from "react";
import { View, Text, Modal, StyleSheet, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function DriverRequestModal({
  passengerName,
  passengerRating,
  passengerDistance,
  onReject,
  onAccept,
}) {
  const [modalVisible, setModalVisible] = useState(true);
  function onCancelHandler() {
    setModalVisible(false);
    onReject();
  }

  function onAcceptHandler() {
    setModalVisible(false);
    onAccept();
  }
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.passengerDetail}>
              <Image
                source={require("../../assets/images/passenger.png")}
                style={{ marginRight: 10 }}
              />
              <Text
                style={{
                  fontSize: 20,
                  marginRight: 5,
                  color: "#494949",
                  fontWeight: "bold",
                }}
              >
                {passengerRating}
              </Text>
              <Ionicons name="star" size={20} color="#FFD700" />
            </View>
            <Text style={styles.modalText}>
              {passengerName},{" "}
              <Text style={{ fontWeight: "bold" }}>{passengerDistance}</Text>{" "}
              away, wants to ride with you.
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                justifyContent: "center",
              }}
            >
              <Pressable style={styles.rejectButton} onPress={onCancelHandler}>
                <Text style={styles.rejectButtonText}>Reject</Text>
              </Pressable>
              <Pressable style={[styles.modalButton]} onPress={onAcceptHandler}>
                <Text style={styles.buttonText}>Accept</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  passengerDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#ededed",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 40,
    elevation: 5,
    alignItems: "center",
    width: "80%",
  },
  modalText: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    width: "90%",
    color: "#494949",
  },
  bottomText: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    color: "#434343",
  },
  modalButton: {
    marginTop: 5,
    backgroundColor: "#727272",
    padding: 10,
    borderRadius: 30,
    elevation: 2,
    width: "40%",
    marginLeft: 20,
  },
  rejectButton: {
    marginTop: 5,
    padding: 10,
    borderRadius: 30,
    width: "40%",
    borderWidth: 1,
  },
  rejectButtonText: {
    color: "#727272",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});

export default DriverRequestModal;
