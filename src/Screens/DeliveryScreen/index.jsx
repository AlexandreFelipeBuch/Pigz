import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ViewTitle,
  ViewRow,
  Title,
  Subtitle,
  Separator,
  ValueLabel,
  Value,
  ButtonDelivery,
  ViewDelivery,
  ViewDeliveryText,
  ViewTimeLine,
  ButtonText,
  ViewButton,
  TextTotal,
} from './styles';
import Header from '../../components/Header';
import ButtonCustom from '../../components/ButtonCustom';
import { Colors } from '../../config/Colors';
import DeliveryIcon from '../../assets/svg/deliveryIcon.svg';
import Timeline from '../../components/TimeLine';

export default () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Header icon iconName={'arrow-left'} title textTitle={'Nova entrega'} />
      <ViewTitle>
        <ViewRow>
          <Title>Tempo Estimado</Title>
          <Subtitle>30 Min</Subtitle>
        </ViewRow>
        <ViewRow>
          <Title>Número de ID</Title>
          <Subtitle>#6789</Subtitle>
        </ViewRow>
      </ViewTitle>
      <Separator />
      <ValueLabel>Valor da Entrega</ValueLabel>
      <Value>R$ 13,75</Value>
      <ButtonDelivery>
        <ViewDelivery>
          <DeliveryIcon width="24" height="24" />
          <ViewDeliveryText>
            <ButtonText>Entrega</ButtonText>
            <TextTotal>Percurso Total: 8km</TextTotal>
          </ViewDeliveryText>
        </ViewDelivery>
      </ButtonDelivery>
      <ViewTimeLine>
        <Timeline />
      </ViewTimeLine>
      <ViewButton>
        <ButtonCustom
          iconName={'check'}
          iconColor={Colors.fontLight}
          title={'Aceitar'}
          elevation={3}
          bgcolor={Colors.gradientPrimary}
          color={Colors.fontLight}
          onPress={null}
        />
      </ViewButton>
      <ViewButton>
        <ButtonCustom
          iconName={'close'}
          iconColor={Colors.primary}
          title={'Rejeitar'}
          borderWidth={'1px'}
          borderColor={Colors.primary}
          elevation={3}
          bgcolor={Colors.gradientSecondary}
          color={Colors.primary}
          onPress={null}
        />
      </ViewButton>
    </Container>
  );
};
