import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
// import { Drawer } from "expo-router";
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryDetailsScreen from './screens/CategoryDetailsScreen'
import MealDetailsScreen from './screens/MealDetailsScreen'
import FavouritiesContextScreen from './screens/FavouritiesContextScreen';
import FavouritiesReduxScreen from './screens/FavouritiesReduxScreen';

export default function App() {

  const Stack = createNativeStackNavigator()
  const Drawer = createDrawerNavigator()

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator screenOptions={{}}>
        <Drawer.Screen name="Categories" component={CategoriesScreen} />
        <Drawer.Screen
          name="Favourities-Context"
          component={FavouritiesContextScreen}
        />
        <Drawer.Screen
          name="Favourities-Redux"
          component={FavouritiesReduxScreen}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="drawer" component={DrawerNavigator} />
          <Stack.Screen name="categories" component={CategoriesScreen} />
          <Stack.Screen name="categoryDetails" component={CategoryDetailsScreen} />
          <Stack.Screen name="mealDetails" component={MealDetailsScreen} 
            options={{
              title: "Meal  - Details"
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
      {/* <DrawerNavigator/> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
