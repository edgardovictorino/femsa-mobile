import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedStackNavigator from './FeedStackNavigator';
import SearchStackNavigator from './SearchStackNavigator';
import NotificationsScreen from '../screens/Notifications/Notifications';
import Icon from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator();

export default function HomeTabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          if (route.name === 'FeedStack') iconName = focused ? 'earth' : 'earth-outline';
          else if (route.name === 'SearchStack') iconName = focused ? 'search' : 'search-outline';
          else if (route.name === 'Notifications') iconName = focused ? 'notifications' : 'notifications-outline';
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="FeedStack" component={FeedStackNavigator} options={{ title: 'Inicio', headerShown: false }} />
      <Tabs.Screen name="SearchStack" component={SearchStackNavigator} options={{ title: 'Buscar', headerShown: false }} />
      <Tabs.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'Notificaciones', headerShown: false }} />
    </Tabs.Navigator>
  );
}
