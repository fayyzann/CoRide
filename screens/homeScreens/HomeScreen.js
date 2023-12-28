import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import RiderDriverMenu from "../../components/Home/RiderDriverMenu";
import SearchBar from "../../components/Home/SearchBar";
import IconButton from "../../components/UI/IconButton";
import { useState } from "react";
import MapBg from "../../components/MapBg";

function HomeScreen({ navigation  }) {
  const [mode, setMode] = useState("Select a mode");
  
  return (
    <View style={styles.container}>
      <MapBg>
        <View style={styles.topBarContainer}>
          <IconButton
            icon="menu"
            size={28}
            color="#454545"
            onPress={() => navigation.toggleDrawer()}
            iconStyle={styles.toggleButton}
          />
          <SearchBar
            onPress={() => {
              navigation.navigate("SearchScreen", { mode });
            }}
          />
        </View>
        <View style={styles.menuStyle}>
          <RiderDriverMenu
            onPress={(mode) => {
              setMode(mode);
            }}
          />
        </View>
        </MapBg>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "grey",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  topBarContainer: {
    position: "absolute",
    top: 70,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  toggleButton: {
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
  menuStyle: {
    height: "18%",
    width: "95%",
    position: "absolute",
    bottom: 30,
  },
});
