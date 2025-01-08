import { Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const IconButton = ({ icon, color, onPress, size = 32 }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <MaterialIcons
        name={icon}
        style={{ color: color }}
        size={size}
        color="white"
      />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
