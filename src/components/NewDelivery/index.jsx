import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';
import {
  DeliveryContainer,
  Title,
  RowText,
  InputContainer,
  Input,
  ButtonOk,
  ViewOk,
  TextButton,
  ButtonScan,
  ScanContainer,
  ScanText,
} from './styles';

const NewDelivery = () => {
  return (
    <DeliveryContainer>
      <Title>Iniciar Nova Entrega</Title>
      <RowText>Número de Identificação</RowText>
      <InputContainer>
        <Input />
        <ButtonOk>
          <ViewOk>
            <TextButton>OK</TextButton>
          </ViewOk>
        </ButtonOk>
      </InputContainer>
      <ButtonScan>
        <ScanContainer>
          <Icon name="qrcode-scan" size={20} color={Colors.fontLight} />
          <ScanText>Escanear QRCode</ScanText>
        </ScanContainer>
      </ButtonScan>
    </DeliveryContainer>
  );
};

export default NewDelivery;
