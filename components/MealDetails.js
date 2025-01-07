import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration} min</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 8,
  },

  detailItem: {
    fontSize: 12,
  },
});
