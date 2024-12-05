import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { logout } from '../services/AuthService';

import { StackNavigationProp } from '@react-navigation/stack';

type ProfileScreenProps = {
  navigation: StackNavigationProp<any, 'ProfileScreen'>;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogout = async () => {
    try {
      await logout();
      navigation.popToTop();
    } catch (error) {
      setErrorMessage('Logout failed');
    }
  };

  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

export default ProfileScreen;
