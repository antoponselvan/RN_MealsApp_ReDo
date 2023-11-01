import { View, Text, StyleSheet } from "react-native";

const MealItemDetails = ({duration, complexity, affordability}) => {
  return (
  <View style={styles.rootContainer}>
    <Text>{duration}min - </Text>
    <Text>{complexity} - </Text>
    <Text>{affordability}</Text>
  </View>)
};

export default MealItemDetails;

const styles = StyleSheet.create({
  rootContainer:{
    flexDirection:'row',
    justifyContent:'center'
  }
});
