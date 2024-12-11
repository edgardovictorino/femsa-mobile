import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme, LinkingOptions } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';

const linking: LinkingOptions<{}> = {
  prefixes: ['travelbookingapp://'],
  config: {
    screens: {
      Auth: {
        screens: {
          Login: 'login',
          Register: 'register',
        },
      },
    },
  },
};

export default function App() {

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <NavigationContainer
          linking={linking}
          theme={DefaultTheme}
        >
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  );
}
