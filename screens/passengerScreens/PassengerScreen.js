import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import AvailableRides from "../../components/Home/AvailableRides";
import IconButton from "../../components/UI/IconButton";
import { useNavigation } from "@react-navigation/native";
import Payment from "../../components/Home/Payment";
import { useState } from "react";
import DriverLoadingModal from "../../components/Home/DriverLoadingModal";
import WaitingForDriver from "../../components/Home/WaitingForDriver";
import RideReview from "../../components/Home/RideReview";
import MapBg from "../../components/MapBg";

function PassengerScreen({ navigation }) {
  //   const navigation = useNavigation();
  const [isRideSelected, setIsRideSelected] = useState(false);
  const [isPaymentSelected, setIsPaymentSelected] = useState(false);
  const [isRideAccepted, setIsRideAccepted] = useState(false);
  const [isRideStarted, setIsRideStarted] = useState(false);
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);

  function handleRideSelect() {
    setIsRideSelected(true);
  }
  function handlePaymentSelection() {
    setIsPaymentSelected(true);
  }
  return (
    <View style={styles.container}>
      <MapBg>
        <IconButton
          icon="menu"
          size={28}
          color="#454545"
          onPress={() => navigation.toggleDrawer()}
          iconStyle={styles.toggleButton}
        />
        {!isRideSelected && <AvailableRides onPress={handleRideSelect} />}
        {isRideSelected && !isPaymentSelected && (
          <Payment onSubmitPayment={handlePaymentSelection} />
        )}
        {isPaymentSelected && !isRideAccepted && isRideSelected && (
          <DriverLoadingModal
            driverName="John Doe"
            onRideCancel={() => {
              setIsRideSelected(false);
              setIsPaymentSelected(false);
            }}
            onRideAccept={() => {
              setIsRideAccepted(true);
            }}
          />
        )}
        {isRideAccepted && !isRideStarted && (
          <WaitingForDriver
            driverName="John Doe"
            carMakeModel="Toyota Corolla"
            carRegNum="ABC-100"
            onRideStart={() => {
              setIsRideStarted(true);
            }}
          />
        )}
        {isRideStarted && !isReviewSubmitted && (
          <RideReview
            driverName="John Doe"
            onReviewSubmit={() => {
              setIsReviewSubmitted(true);
              navigation.navigate("HomeScreen");
            }}
          />
        )}
      </MapBg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "fixed",
  },
  toggleButton: {
    position: "absolute",
    top: 70,
    left: 20,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    paddingHorizontal: 10,
    marginRight: 10,
    elevation: 5,
    shadowColor: "#454545",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default PassengerScreen;
