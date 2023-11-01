import {View, Text, StyleSheet, FlatList} from 'react-native'
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = ({navigation}) => {
  // const CATEGORIES = [
  //   { id: 1, title: "A", color: "00fffe" },
  //   { id: 2, title: "B", color: "0000fe" },
  // ];
  console.log(CATEGORIES)
  const renderCategoryTile = (category) => {
    const onPress = () => {
      console.log("pressed")
      navigation.navigate("categoryDetails", {
        categoryId: category.item.id
      })
    }

    return (
      <CategoryGridTile onPress={onPress} color={category.item.color} title={category.item.title}/>
    )    
  }

  return (
    <FlatList 
      data={CATEGORIES} 
      renderItem={renderCategoryTile}
      keyExtractor={(item)=>item.id}
      numColumns={2}
    />
  )
}

export default CategoriesScreen