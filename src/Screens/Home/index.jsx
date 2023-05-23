import React from 'react';
//--------------------------Components------------------------
import Header from '../../components/Header';
import DailyEarnings from '../../components/DailyEarnings';
import Delivery from '../../components/Delivery';
import NewDelivery from '../../components/NewDelivery';
import { Container } from './styles';

export default () => {
  return (
    <Container>
      <Header icon iconName={'arrow-left'} title textTitle={'Visão geral'} />
      <DailyEarnings />
      <Delivery />
      <NewDelivery />
    </Container>
  );
};
