import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/Search/Search';
import DetailsScreen from '../screens/Home/Details';

const SearchStack = createNativeStackNavigator();

export default function SearchStackNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      <SearchStack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
    </SearchStack.Navigator>
  );
}
