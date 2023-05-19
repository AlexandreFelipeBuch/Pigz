import styled from 'styled-components/native';

import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const Container = styled.View`
  width: 100%;
  bottom: 15px;
`;
export const Content = styled.View`
  left: 5px;
`;
export const ViewInput = styled.View``;
export const ViewSpace = styled.View``;

export const Title = styled.Text`
  font-weight: bold;
  color: #212121;
`;

export const Text = styled.Text`
  font-size: 12px;
  font-weight: 500;
  width: 90%;
  top: 2px;
  font-family: ${Fonts.PrimaryFont};
  color: ${(props) => `${props.color}`};
`;

export const View = styled.View`
  flex-direction: row;
  align-items: center;
`;
