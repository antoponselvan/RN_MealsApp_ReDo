import {View, Text, Pressable, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const IconButton = ({onPress, name}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Ionicons name={name} size={24}/>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  button:{
    margin:20
  }
})