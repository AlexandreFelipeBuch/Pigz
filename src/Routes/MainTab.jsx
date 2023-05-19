import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarCustom from '../components/TabBarCustom';

import Home from '../Screens/Home';
import Profile from '../Screens/Profile';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: true,
      tabBarInactiveTintColor: 'black',
      tabBarLabelStyle: {
        fontSize: 13,
      },
      tabBarStyle: {
        position: 'absolute',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      },
    }}
    backBehavior="history"
    tabBar={(props) => <TabBarCustom {...props} />}
  >
    <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
  </Tab.Navigator>
);
