import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './Routes/MainStack';
import { StatusBar } from 'react-native';

export default () => {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
      <MainStack />
    </NavigationContainer>
  );
};
