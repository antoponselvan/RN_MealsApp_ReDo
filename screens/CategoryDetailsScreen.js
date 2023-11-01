import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";

const CategoriesDetailsScreen = ({route}) => {
  const categoryId = route.params.categoryId
  const relevantMeals = MEALS.filter((meal)=>meal.categoryIds.includes(categoryId))
  return (
    <>
      <MealList mealItems={relevantMeals}/>
    </>)
};

export default CategoriesDetailsScreen;

const styles = StyleSheet.create({

})