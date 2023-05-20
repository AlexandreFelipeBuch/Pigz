import {
  DeliveryContainer,
  Title,
  RowContainer,
  SquareContainer,
  RowText,
  RowTextNumber,
} from './styles';
import React from 'react';

const Delivery = () => {
  return (
    <DeliveryContainer>
      <Title>Resumo das Entregas</Title>
      <RowContainer>
        <SquareContainer>
          <RowText>Aceitas</RowText>
          <RowTextNumber>15</RowTextNumber>
        </SquareContainer>
        <SquareContainer>
          <RowText>Rejeitadas</RowText>
          <RowTextNumber>5</RowTextNumber>
        </SquareContainer>
        <SquareContainer>
          <RowText>Total</RowText>
          <RowTextNumber>20</RowTextNumber>
        </SquareContainer>
      </RowContainer>
    </DeliveryContainer>
  );
};

export default Delivery;
