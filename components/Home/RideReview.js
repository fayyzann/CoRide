import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import IconButton from "../UI/IconButton";
import TextButton from "../UI/TextButton";
import ReviewStars from "./ReviewStars";

function RideReview({ driverName, onReviewSubmit, driverMode, passengerName }) {
  if(driverMode) {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.topText}>How was your ride?</Text>
        </View>
        <View style={styles.mainContainer}>
          <Image source={require("../../assets/images/passenger.png")} />
          <Text style={styles.nameText}>{passengerName}</Text>
          <ReviewStars />
          <TextInput placeholder="Leave a comment" style={styles.commentInput} />
        </View>
        <TextButton
          text="Done"
          style={styles.submitButton}
          textStyle={styles.submitButtonText}
          onPress={onReviewSubmit}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>How was your ride?</Text>
      </View>
      <View style={styles.mainContainer}>
        <Image source={require("../../assets/images/driver.png")} />
        <Text style={styles.nameText}>{driverName}</Text>
        <ReviewStars />
        <TextInput placeholder="Leave a comment" style={styles.commentInput} />
      </View>
      <TextButton
        text="Done"
        style={styles.submitButton}
        textStyle={styles.submitButtonText}
        onPress={onReviewSubmit}
      />
    </View>
  );
}

export default RideReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#CEC2C2",
    borderBottomWidth: 1,
    width: "100%",
    marginBottom: 20,
    padding: 20,
  },
  topText: {
    fontSize: 18,
    fontWeight: "300",
  },
  mainContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  commentInput: {
    width: "75%",
    borderWidth: 1,
    borderColor: "#CEC2C2",
    borderRadius: 30,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "#727272",
  },
  submitButton: {
    backgroundColor: "#727272",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    width: "60%",
  },
  submitButtonText: {
    color: "#EDEDED",
    fontSize: 18,
    fontWeight: "bold",
  },
});
