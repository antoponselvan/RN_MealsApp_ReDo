import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

const MealList = ({mealItems}) => {
  console.log(mealItems)
  const renderFunction = (mealItem) => {
    return (<MealItem {...mealItem.item}/>)
  }

  return (
  <View>
    <FlatList 
      data={mealItems} 
      renderItem={renderFunction}
      keyExtractor={(item)=>item.id}/>
  </View>);
};

export default MealList;

const styles = StyleSheet.create({});
