import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/Home';
import DetailsScreen from '../screens/Home/Details';

const FeedStack = createNativeStackNavigator();

export default function FeedStackNavigator() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <FeedStack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
    </FeedStack.Navigator>
  );
}
