import { View, Text, StyleSheet, TextInput } from "react-native";
import IconButton from "../../components/UI/IconButton";
import RecentTrips from "../../components/Home/RecentTrips";

function SearchScreen({ route, navigation }) {
  const { mode } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.topBarContainer}>
        <IconButton
          icon="chevron-back-circle"
          size={35}
          color="black"
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        />
        <Text style={styles.modeText}>{mode}</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <IconButton icon="location-sharp" size={24} color="black" />
          <TextInput style={styles.input} placeholder="Enter your location" />
        </View>
        <View style={styles.inputContainer}>
          <IconButton icon="locate-sharp" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Enter your destination"
          />
        </View>
      </View>
      <View style={styles.recentTrips}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Recent Trips
        </Text>
        <RecentTrips rideMode={mode} />
      </View>
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  topBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 40,
    width: "100%",
  },
  modeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 90,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    borderTopWidth: 1,
    borderTopColor: "#D9D9D9",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    padding: 2,
    borderRadius: 20,
    marginVertical: 5,
    width: "85%",
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 10,
    color: "#454545",
  },
  recentTrips: {
    flex: 1,
    top: 220,
    width: "100%",
  },
});
