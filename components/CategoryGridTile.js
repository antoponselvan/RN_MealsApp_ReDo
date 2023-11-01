import {View, Text, Pressable, StyleSheet} from 'react-native'

const CategoryGridTile = ({title, color, onPress}) => {
  return (
    <View style={styles.gridItem}>
      <Pressable style={styles.button} onPress={onPress}>
        <View style={[{backgroundColor:color, flex:1}, styles.textContainer]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem: {
    height: 130,
    margin: 10,
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 24,
    textAlign:'center'
  },
  textContainer: {
    justifyContent: "center",
    alignContent: "center",
    flex:1,
    textAlign:'center'
  },
});