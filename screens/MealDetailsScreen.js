import { View, Text, StyleSheet } from "react-native";
import {useLayoutEffect, useContext} from 'react'
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealList/MealItem";
import IconButton from "../components/IconButton";
import { FavListContext } from "../store/context/favourities-context";

const MealDetailsScreen = ({route, navigation}) => {
  const favListContext = useContext(FavListContext)
  const onFavHandler = () => {}
  const mealId = route.params.mealId
  const isFav = favListContext.favIdList.includes(mealId)

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton onPress={favListContext.toggleFavId.bind(this, mealId)} name={isFav ? "star" : "star-outline"}/>
        )
      }
    })
  },[isFav])
  const selectedMeal = MEALS.find((meal)=>(meal.id === mealId))
  console.log(favListContext)
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
