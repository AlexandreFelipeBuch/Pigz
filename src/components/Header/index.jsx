import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Container, ButtonIcon, Icon, ViewLogo, ViewTitle, TextTitle } from './styles';
import Logo from '../../assets/svg/LogoPreload.svg';

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
          <Icon name={iconName} />
        </ButtonIcon>
      )}
      <ViewLogo style={{ right: icon ? 20 : 1 }}>
        {title && (
          <ViewTitle>
            <TextTitle>{textTitle}</TextTitle>
          </ViewTitle>
        )}
        {logo && <Logo width="178" height="67" />}
      </ViewLogo>
    </Container>
  );
};

export default Header;
