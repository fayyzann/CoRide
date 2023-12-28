import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { getMapPreview } from "../util/location";

function MapBg({ children }) {
  const [pickedLocation, setPickedLocation] = useState();

  useEffect(() => {
    (async () => {
      const { status } = await requestForegroundPermissionsAsync();

      if (status === PermissionStatus.GRANTED) {
        try {
          const location = await getCurrentPositionAsync();
          setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          });
        } catch (error) {
          console.error("Error fetching location:", error);
        }
      } else {
        console.log("Location permission denied");
      }
    })();
  }, []);

  let locationPreview = (
    <View>
      <ActivityIndicator size="large" color="#454545" />
      <Text>Fetching your location.....</Text>
    </View>
  );

  if (pickedLocation) {
    locationPreview = (
      <ImageBackground
        source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) }}
        style={styles.mapPreviewImage}
      />
    );
  }

  return (
    <View style={styles.container}>
      {locationPreview}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  mapPreviewImage: {
    width: "100%",
    height: "100%",
    marginTop: 30,
  },
});

export default MapBg;
