import React, { useCallback, useEffect, useState } from 'react';
import {
  useNavigation,
  useRoute,
  getFocusedRouteNameFromRoute,
  useFocusEffect,
} from '@react-navigation/native';
import { TabArea, TabItem, TextBottom } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';

export default () => {
  const { navigate } = useNavigation();
  const [buttonTab, setButtonTab] = useState('Home');
  const route = useRoute();
  const routeName = getFocusedRouteNameFromRoute(route);

  const handleNav = () => {
    if (routeName === undefined) {
      setButtonTab('Home');
    } else {
      setButtonTab(routeName);
    }
  };
  useEffect(() => {
    handleNav();
  }, [routeName]);

  return (
    <TabArea>
      <TabItem onPress={() => navigate('Home')}>
        <MaterialCommunityIcons
          name="home-variant"
          size={30}
          style={{
            opacity: buttonTab === 'Home' ? 1 : 0.3,
            color: Colors.fontLight,
          }}
        />
        <TextBottom
          style={{
            opacity: buttonTab === 'Home' ? 1 : 0.3,
            color: Colors.fontLight,
          }}
        >
          Home
        </TextBottom>
      </TabItem>
      <TabItem onPress={() => navigate(null)}>
        <MaterialCommunityIcons
          name="ticket-confirmation-outline"
          size={30}
          style={{
            opacity: routeName === null ? 1 : 0.3,
            color: Colors.fontLight,
          }}
        />
        <TextBottom
          style={{
            opacity: routeName === null ? 1 : 0.3,
            color: Colors.fontLight,
          }}
        >
          Ingressos
        </TextBottom>
      </TabItem>
      <TabItem onPress={() => navigate(null)}>
        <MaterialCommunityIcons
          name="help-circle-outline"
          size={30}
          style={{
            opacity: routeName === null ? 1 : 0.3,
            color: Colors.fontLight,
          }}
        />
        <TextBottom
          style={{
            opacity: routeName === null ? 1 : 0.3,
            color: Colors.fontLight,
          }}
        >
          Ajuda
        </TextBottom>
      </TabItem>
      <TabItem onPress={() => navigate('Profile')}>
        <MaterialCommunityIcons
          name="account-outline"
          size={30}
          style={{
            opacity: routeName === 'Profile' ? 1 : 0.3,
            color: Colors.fontLight,
          }}
        />
        <TextBottom
          style={{
            opacity: routeName === 'Profile' ? 1 : 0.3,
            color: Colors.fontLight,
          }}
        >
          Perfil
        </TextBottom>
      </TabItem>
    </TabArea>
  );
};
