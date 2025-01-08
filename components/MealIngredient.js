import { Pressable, StyleSheet, Text, View } from "react-native";
import CheckBox from "./CheckBox";

const MealIngredient = ({
  selectedIngredients,
  setSelectedIngredients,
  index,
  ingredient,
  style,
}) => {
  const onPressHandler = () => {
    const newSelectedIngredients = selectedIngredients.slice();
    newSelectedIngredients[index] = !selectedIngredients[index];

    setSelectedIngredients(newSelectedIngredients);
  };

  return (
    <View>
      <Pressable onPress={onPressHandler} style={styles.contentContainer}>
        <View style={styles.checkboxContainer}>
          <CheckBox isChecked={selectedIngredients[index]} />
        </View>
        <Text
          style={
            selectedIngredients[index]
              ? [
                  style,
                  {
                    color: "#e67206",
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid",
                  },
                ]
              : style
          }
          key={ingredient}
        >
          {ingredient}
        </Text>
      </Pressable>
    </View>
  );
};

export default MealIngredient;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  checkboxContainer: {
    width: 32,
  },
});
