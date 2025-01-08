import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({ items }) => {
  const renderMealItem = ({ item }) => {
    return <MealItem {...item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
