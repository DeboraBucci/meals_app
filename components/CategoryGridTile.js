import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
} from "react-native";

const CategoryGridTile = ({ title, imageUrl, color, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          { flex: 1 },
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.imageContainer, { backgroundColor: color }]}>
          <Image source={imageUrl} style={styles.image} />
          <View style={styles.overlay} />
        </View>

        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
    height: 150,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    width: "100%",
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    letterSpacing: 5,
    textTransform: "uppercase",
    textAlign: "center",
  },

  buttonPressed: {
    opacity: 0.5,
  },

  imageContainer: {
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
