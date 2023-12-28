import { Dimensions } from "react-native";

export function getMapPreview(lat, lng) {
    const screenWidth = Math.round(Dimensions.get("window").width);
    const screenHeight = Math.round(Dimensions.get("window").height);
    const markerUrl =
      `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-s+000000(${lng},${lat})/${lng},${lat},14/` +
      `${screenWidth}x${screenHeight}?access_token=pk.eyJ1IjoiZmF5eXphbm4iLCJhIjoiY2xvc3Fnam1xMDMzNjJpcWR3eTRiN2Z1dCJ9.ybxb2j-jgLJmCYpZAHFwcg`;
  
    return markerUrl;
  }
  
