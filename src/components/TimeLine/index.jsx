import {
  TimelineContainer,
  ViewItems,
  Line1,
  Line2,
  Line3,
  Line4,
  Ball,
  Ball2,
  BallGray,
  BallGray2,
  Title,
  Title2,
  SubTitle,
  SubTitle2,
} from './styles';
import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

const TimelineItem = ({ title, description }) => (
  <TimelineItemContainer>
    <ViewItems>
      <Description>{description}</Description>
    </ViewItems>
  </TimelineItemContainer>
);

const Timeline = () => (
  <TimelineContainer>
    <Line1 />
    <ViewItems>
      <Ball />
      <Title>Coleta</Title>
    </ViewItems>
    <Line2 />
    <ViewItems>
      <BallGray />
      <SubTitle>Restaurante Recanto da Peixada Distancia: 2km</SubTitle>
    </ViewItems>
    <Line3 />
    <ViewItems>
      <Ball2 />
      <Title2>Entrega</Title2>
    </ViewItems>
    <Line4 />
    <ViewItems>
      <BallGray2 />
      <SubTitle2>Av: Cabo dos Soldados - Caranã Distancia: 6km</SubTitle2>
    </ViewItems>
  </TimelineContainer>
);

export default Timeline;
