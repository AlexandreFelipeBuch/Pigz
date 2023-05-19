import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  AlertContainer,
  IconView,
  ViewLogo,
  AlertHeaderView,
  AlertHeaderText,
  Message,
  MessageBlue,
  MessageView,
} from './styles';
import Logo from '../../assets/svg/LogoPreload.svg';
import { Colors } from '../../config/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AlertCustom = ({ onPress, visible, email }) => {
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
          <AlertHeaderText>CONFIRME SEU CADASTRO</AlertHeaderText>
        </AlertHeaderView>
        <MessageView>
          <Message>
            Sua solicitação de cadastro foi recebida com{'\n'}
            sucesso!{'\n\n'} Para validar seu cadastro, enviamos um{'\n'}
            e-mail de confirmação para{'\n'}
            <MessageBlue>{email}</MessageBlue>.{'\n\n'}
            Siga as instruções contidas no e-mail para{'\n'}
            confirmar o seu cadastro.{'\n\n'}
          </Message>
        </MessageView>
      </AlertContainer>
    </Container>
  ) : null;
};

export default AlertCustom;
