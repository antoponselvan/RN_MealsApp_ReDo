import {View, Text, StyleSheet, Image, Pressable} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import MealItemDetails from './MealItemDetails'

const MealItem = ({
  id, 
  title,
  imageUrl,
  duration,
  complexity,
  affordability  
}) => {
  const navigation = useNavigation()
  const onPressHandler = () =>{
    navigation.navigate("mealDetails",{
      mealId: id
    })
  }

  return (
    <View style={styles.rootContainer}>
      <Pressable style={styles.rootContainer} onPress={onPressHandler}>
        <Image source={{uri: imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{title}</Text>
        <MealItemDetails duration={duration} complexity={complexity} affordability={affordability}/>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  image: {
    height:200,
    width: 200
  },
  title:{
    fontSize:24,
    textAlign:'center'
  },
  rootContainer:{
    alignItems:'center',
    justifyContent:'center',
    margin:20
  }
})