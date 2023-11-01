import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FavListContext } from "../store/context/favourities-context";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";

const FavouritiesContextScreen = () => {
  const favListContext = useContext(FavListContext)
  const favMealsData = MEALS.filter((meal)=>(favListContext.favIdList.includes(meal.id)))
  return (
    <MealList mealItems={favMealsData}/>
  );
};

export default FavouritiesContextScreen;
