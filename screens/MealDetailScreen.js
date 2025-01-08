import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
import { useLayoutEffect } from "react";

const MealDetailScreen = ({ route, navigation }) => {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    }

    if (!mealIsFavorite) {
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "favorite" : "favorite-border"}
          color="white"
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{selectedMeal.title}</Text>

        <MealDetails
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          textStyle={{ color: "#818181", fontWeight: "bold" }}
        />

        <Text style={styles.subtitle}>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient) => (
          <Text style={styles.text} key={ingredient}>
            {ingredient}
          </Text>
        ))}

        <Text style={styles.subtitle}>Steps</Text>
        {selectedMeal.steps.map((step, i) => (
          <Text style={[styles.text, styles.step]} key={step}>
            <Text style={styles.stepNum}>{i + 1}.</Text> {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },

  contentContainer: {
    flex: 1,
    marginTop: -30,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    overflow: "hidden",
    backgroundColor: "white",
    padding: 24,
  },

  title: {
    color: "#24211f",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },

  subtitle: {
    color: "#e67206",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 8,
  },

  text: {
    color: "#333333",
    marginBottom: 4,
  },

  step: {
    backgroundColor: "#fdf3ed",
    borderRadius: 12,
    padding: 8,
    marginBottom: 12,
  },

  stepNum: {
    fontWeight: "bold",
    color: "#f09846",
  },
});
