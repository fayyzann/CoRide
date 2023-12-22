import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  StyleSheet,
  Animated,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const DATA = [
  {
    id: "1",
    driverName: "John Doe",
    carModel: "Toyota Corolla",
    time: "20 min",
    seats: "3",
    price: "1000",
  },
  {
    id: "2",
    driverName: "John Doe",
    carModel: "Toyota Corolla",
    time: "20 min",
    seats: "3",
    price: "1000",
  },
  {
    id: "3",
    driverName: "John Doe",
    carModel: "Toyota Corolla",
    time: "20 min",
    seats: "3",
    price: "1000",
  },
  {
    id: "4",
    driverName: "John Doe",
    carModel: "Toyota Corolla",
    time: "20 min",
    seats: "3",
    price: "1000",
  },
];

function AvailableRides({onPress}) {
  const slideUpAnimation = new Animated.Value(1000); // Initial position outside the screen

  React.useEffect(() => {
    Animated.timing(slideUpAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  function AvailableRidesList({ item }) {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.itemContainer,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
      >
        <View style={styles.itemOuterContainer}>
          <View style={styles.itemInnerContainer}>
            <Image
              style={styles.itemImage}
              source={require("../../assets/images/driver.png")}
            />
            <View style={styles.itemDetails}>
              <Text style={styles.nameText}>{item.driverName}</Text>
              <Text style={styles.detailText}>{item.carModel}</Text>
              <View style={styles.itemRow}>
                <Text style={styles.detailText}>{item.time}</Text>
                <View style={styles.seatsView}>
                  <Ionicons name="person" size={20} color="#4A4A4A" />
                  <Text style={styles.detailText}>{item.seats}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.priceText}>Rs. {item.price}</Text>
          </View>
        </View>
      </Pressable>
    );
  }

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: slideUpAnimation }] },
      ]}
    >
      <Text style={styles.title}>Available Rides</Text>
      <FlatList
        data={DATA}
        renderItem={AvailableRidesList}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
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
    paddingTop: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "60%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  itemContainer: {
    padding: 10,
  },
  pressed: {
    opacity: 0.8,
  },
  itemOuterContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    elevation: 2,
  },
  itemInnerContainer: {
    padding: 10,
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A4A4A",
    marginRight: 10,
  },
  detailText: {
    fontSize: 14,
    color: "#4A4A4A",
    marginBottom: 5,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  seatsView: {
    marginLeft: 30,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AvailableRides;
