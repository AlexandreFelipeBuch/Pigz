import 'react-native-gesture-handler';
import * as React from 'react';
import UserContextProvider from './contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './Routes/MainStack';
import { StatusBar } from 'react-native';

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
};
