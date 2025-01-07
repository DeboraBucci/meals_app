import { Text, View } from "react-native";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  return (
    <View>
      <Image />
      <Text>{categoryId}</Text>
      <View></View>

      <Text>Ingredients</Text>
      <Text>Steps</Text>
    </View>
  );
};

export default MealDetailScreen;
