// HomeScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate('Profile' as never);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Go to Profile" onPress={goToProfile} />
    </View>
  );
};

export default HomeScreen;
