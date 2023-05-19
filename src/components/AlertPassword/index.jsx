import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  AlertContainer,
  IconView,
  ViewLogo,
  AlertHeaderView,
  AlertHeaderText,
} from './styles';
import Logo from '../../assets/svg/LogoPreload.svg';
import { Colors } from '../../config/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AlertPassword = ({ onPress, visible, email }) => {
  return visible ? (
    <Container>
      <AlertContainer>
        <IconView onPress={onPress}>
          <Icon name="close-circle" size={28} color={Colors.inputText} />
        </IconView>
        <ViewLogo>
          <Logo width="196" height="82" />
        </ViewLogo>
        <AlertHeaderView>
          <AlertHeaderText>Sua senha foi alterada com sucesso!</AlertHeaderText>
        </AlertHeaderView>
      </AlertContainer>
    </Container>
  ) : null;
};

export default AlertPassword;
