import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DeliveryContainer,
  Title,
  RowText,
  InputContainer,
  Input,
  ButtonOk,
  TextButton,
  ScanContainer,
  ScanText,
} from './styles';
import { Colors } from '../../config/Colors';

const NewDelivery = () => {
  return (
    <DeliveryContainer>
      <Title>Iniciar Nova Entrega</Title>
      <RowText>Número de Identificação</RowText>

      <InputContainer>
        <Input />
        <ButtonOk>
          <TextButton>OK</TextButton>
        </ButtonOk>
      </InputContainer>
      <ScanContainer>
        <Icon name="qrcode-scan" size={20} color={Colors.fontLight} />
        <ScanText>Escanear QRCode</ScanText>
      </ScanContainer>
    </DeliveryContainer>
  );
};

export default NewDelivery;
