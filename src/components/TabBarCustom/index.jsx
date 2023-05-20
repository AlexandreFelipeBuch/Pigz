import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { TabArea, TabItem, TextBottom, Line } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ticket from '../../assets/svg/ticket.svg';
import Home from '../../assets/svg/home.svg';
import Profile from '../../assets/svg/account.svg';
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
        <Ticket
          fill={buttonTab === 'Home' ? Colors.primary : Colors.gray_04}
          width={26}
          height={26}
        />
        <TextBottom
          style={{
            color: buttonTab === 'Home' ? Colors.primary : Colors.gray_04,
          }}
        >
          Relatórios
        </TextBottom>
        {buttonTab === 'Home' && <Line />}
      </TabItem>
      <TabItem onPress={() => navigate('Home')}>
        <Home
          fill={buttonTab === 'Home' ? Colors.primary : Colors.gray_04}
          width={26}
          height={26}
        />
        <TextBottom
          style={{
            color: buttonTab === 'Home' ? Colors.primary : Colors.gray_04,
          }}
        >
          Visão Geral
        </TextBottom>
        {buttonTab === 'Home' && <Line />}
      </TabItem>
      <TabItem onPress={() => navigate('Profile')}>
        <Profile
          width="26"
          height="26"
          fill={buttonTab === 'Profile' ? Colors.primary : Colors.gray_04}
        />
        <TextBottom
          style={{
            color: buttonTab === 'Profile' ? Colors.primary : Colors.gray_04,
          }}
        >
          Perfil
        </TextBottom>
        {buttonTab === 'Profile' && <Line />}
      </TabItem>
    </TabArea>
  );
};
