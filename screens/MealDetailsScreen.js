import { View, Text, StyleSheet } from "react-native";
import {useLayoutEffect} from 'react'
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealList/MealItem";
import IconButton from "../components/IconButton";

const MealDetailsScreen = ({route, navigation}) => {
  const onFavHandler = () => {}
  const isFav = true

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton onPress={onFavHandler} name={isFav ? "star" : "star-outline"}/>
        )
      }
    })
  },[])
  const selectedMeal = MEALS.find((meal)=>(meal.id === route.params.mealId))
  console.log(selectedMeal)
  return (
    <View style={styles.rootContainer}>
      <MealItem {...selectedMeal}/>
      {selectedMeal.ingredients.map((ingridient)=>(<Text>{ingridient}</Text>))}
    </View>   
  );
};

export default MealDetailsScreen;

const styles= StyleSheet.create({
  rootContainer:{
    alignItems:"center"
  }
})
