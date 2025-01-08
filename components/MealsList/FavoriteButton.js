import { useDispatch, useSelector } from "react-redux";
import IconButton from "../IconButton";
import { addFavorite, removeFavorite } from "../../store/redux/favorites";

const FavoriteButton = ({ id, ...props }) => {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealIsFavorite = favoriteMealIds.includes(id);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: id }));
    }

    if (!mealIsFavorite) {
      dispatch(addFavorite({ id: id }));
    }
  };

  return (
    <IconButton
      {...props}
      icon={mealIsFavorite ? "favorite" : "favorite-border"}
      color="white"
      onPress={changeFavoriteStatusHandler}
    />
  );
};

export default FavoriteButton;
