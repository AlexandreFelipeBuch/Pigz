import styled from 'styled-components/native';

import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';
import LinearGradient from 'react-native-linear-gradient';
export const TabArea = styled.View`
  flex-direction: row;
  height: 55px;
  background-color: ${Colors.background};
  justify-content: flex-end;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  padding: 3px;
  justify-content: center;
  align-items: center;
`;
export const Line = styled.View`
  height: 3px;
  width: 100%;
  border-radius: 3px;
  margin-top: 3px;
  background-color: ${Colors.gray_03};
`;
export const TextBottom = styled.Text`
  flex: 1;
  font-size: 10px;
  margin: 2px;
  font-family: ${Fonts.PrimaryFontMedium};
`;

export const TabIcon = styled.Image``;
