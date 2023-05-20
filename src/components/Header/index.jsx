import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Container, ButtonIcon, ViewLogo, ViewTitle, TextTitle } from './styles';
import Logo from '../../assets/svg/LogoPreload.svg';
import { Colors } from '../../config/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({ title, icon, iconName, logo, textTitle }) => {
  const { goBack } = useNavigation();
  const navigation = useNavigation();

  const handleOnPress = () => {
    if (iconName === 'menu') {
      navigation.toggleDrawer();
    } else {
      goBack();
    }
  };
  return (
    <Container>
      {icon && (
        <ButtonIcon onPress={() => handleOnPress()}>
          <Icon name={iconName} size={24} color={Colors.primary} />
        </ButtonIcon>
      )}
      <ViewLogo>
        {title && (
          <ViewTitle>
            <TextTitle>{textTitle}</TextTitle>
          </ViewTitle>
        )}
      </ViewLogo>
    </Container>
  );
};

export default Header;
