import styled from 'styled-components/native';

import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';
import LinearGradient from 'react-native-linear-gradient';
export const TabArea = styled(LinearGradient).attrs({
  colors: ['rgba(255, 230, 155, 0.8)', 'rgba(255, 230, 155, 0.6)', '#FF9326'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0.5 },
})`
  flex-direction: row;
  height: 55px;
  background-color: ${Colors.buttonColorPrimary};
  elevation: 3;
  justify-content: flex-end;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  padding: 3px;
  justify-content: center;
  align-items: center;
`;
export const TextBottom = styled.Text`
  flex: 1;
  font-size: 12px;
  color: ${Colors.fontLight};
  font-family: ${Fonts.PrimaryFontMedium};
`;

export const TabIcon = styled.Image``;
