import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import DailyEarnings from '../../components/DailyEarnings';
import Delivery from '../../components/Delivery';
import NewDelivery from '../../components/NewDelivery';

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
