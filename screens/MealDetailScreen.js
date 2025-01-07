import { Text } from "react-native";

const MealDetailScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  return <Text>{categoryId}</Text>;
};

export default MealDetailScreen;
