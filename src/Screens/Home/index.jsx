import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';
import Header from '../../components/Header';
import DailyEarnings from '../../components/DailyEarnings';
import Delivery from '../../components/Delivery';
import NewDelivery from '../../components/NewDelivery';

export default () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Header icon iconName={'arrow-left'} title textTitle={'Visão geral'} />
      <DailyEarnings />
      <Delivery />
      <NewDelivery />
    </Container>
  );
};
