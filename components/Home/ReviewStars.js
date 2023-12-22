import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Assuming you're using Expo icons

function ReviewStars() {
  const [selectedStars, setSelectedStars] = useState(0); // Initially, no stars are selected

  const handleStarPress = (numberOfStars) => {
    setSelectedStars(numberOfStars);
  };

  const renderStars = () => {
    const stars = [];
    const maxStars = 5;

    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <TouchableWithoutFeedback key={i} onPress={() => handleStarPress(i)}>
          <FontAwesome
            name="star"
            size={30}
            color={selectedStars >= i ? "#ffd700" : "#727272"}
            style={styles.selectedStar}
          />
        </TouchableWithoutFeedback>
      );
    }

    return stars;
  };

  return <View style={styles.starsContainer}>{renderStars()}</View>;
}

const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  selectedStar: {
    marginRight: 5,
  },
});

export default ReviewStars;
