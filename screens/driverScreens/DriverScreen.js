import { View, Text, StyleSheet, ImageBackground } from "react-native";
import RideSchedule from "../../components/Home/RIdeSchedule";
import { useState, useEffect } from "react";
import RideRemainingTime from "../../components/Home/RideRemainingTime";
import DriverRequestModal from "../../components/Home/DriverRideRequest";
import RideReview from "../../components/Home/RideReview";
import IconButton from "../../components/UI/IconButton";
import MapBg from "../../components/MapBg";

function DriverScreen({ navigation }) {
  const [isRideScheduled, setIsRideScheduled] = useState(false);
  const [isRideRequested, setIsRideRequested] = useState(false);
  const [isRideStarted, setIsRideStarted] = useState(false);
  const [rideData, setRideData] = useState({
    carMake: null,
    carReg: null,
    seatCapacity: null,
    time: null,
  });

  useEffect(() => {
    setTimeout(() => {
      setIsRideRequested(true);
    }, 25000);
  }, []);
  function onRideSchedule({ carMake, carReg, seatCapacity, time }) {
    console.log(carMake, carReg, seatCapacity, time);
    setRideData({
      carMake,
      carReg,
      seatCapacity,
      time,
    });
    setIsRideScheduled(true);
  }
  return (
    <View style={styles.container}>
      {!isRideScheduled &&
        Object.values(rideData).every((attr) => attr === null) && (
          <RideSchedule
            startLoc="Main Market, Gulberg"
            dest="Meezan Bank, G-Block, Johar Town"
            onRideSchedule={onRideSchedule}
          />
        )}
      {isRideScheduled && (
        <MapBg>
          <IconButton
            icon="menu"
            size={28}
            color="#454545"
            onPress={() => navigation.toggleDrawer()}
            iconStyle={styles.toggleButton}
          />
          {isRideRequested && (
            <DriverRequestModal
              passengerName="Hamza"
              passengerRating={4.7}
              passengerDistance="1.2 km"
              onAccept={() => {
                setIsRideRequested(false);
              }}
              onReject={() => {
                setIsRideRequested(false);
              }}
            />
          )}
          {!isRideStarted && isRideScheduled && (
            <RideRemainingTime
              remainingTime={0}
              onRideStart={() => {
                setIsRideStarted(true);
              }}
            />
          )}
          {isRideStarted && (
            <RideReview
              driverMode={true}
              passengerName="Hamza"
              onReviewSubmit={() => {
                navigation.navigate("HomeScreen");
              }}
            />
          )}
        </MapBg>
      )}
    </View>
  );
}

export default DriverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
