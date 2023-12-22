import { StyleSheet, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function TextIconButton({
  text,
  icon,
  size,
  color,
  onPress,
  style,
  textStyle,
}) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

export default TextIconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    marginRight: 5,
  },
});
