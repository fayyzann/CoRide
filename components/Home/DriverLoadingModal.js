import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";

function DriverLoadingModal({ driverName, onRideCancel, onRideAccept }) {
  const [modalVisible, setModalVisible] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setModalVisible(false);
        onRideAccept();
      }, 4000);
    }, []);

  function onCancelHandler() {
    setModalVisible(false);
    onRideCancel();
  }
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ActivityIndicator
              size="large"
              color="#727272"
              style={styles.loader}
            />
            <Text style={styles.toptext}>Wait!</Text>
            <Text style={styles.modalText}>
              We are connecting you with {driverName}
            </Text>
            <Text style={styles.bottomText}>Changed your mind?</Text>
            <Pressable style={styles.modalButton} onPress={onCancelHandler}>
              <Text style={styles.buttonText}>Cancel Ride</Text>
            </Pressable>
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
  loader: {
    marginBottom: 15,
    transform: [{ scale: 1.5 }],
  },
  toptext: {
    fontSize: 20,
    fontWeight: "900",
    alignSelf: "center",
    color: "#434343",
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
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    width: "80%",
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
    width: "60%",
  },
});

export default DriverLoadingModal;
