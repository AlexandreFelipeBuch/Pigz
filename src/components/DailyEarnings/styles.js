import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';
import LinearGradient from 'react-native-linear-gradient';

export const RectangleContainer = styled(LinearGradient).attrs({
  colors: ['#FA641E', '#FF881F'],
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 },
})`
  align-self: center;
  padding: 10px;
  border-radius: 16px;
  width: 85%;
  height: 107px;
`;

export const RowContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const TextTitle = styled.Text`
  font-size: 16px;
  color: ${Colors.fontLight};
  margin: 5px;
  font-family: ${Fonts.PrimaryFontMedium};
`;

export const TextValue = styled.Text`
  font-size: 30px;
  color: ${Colors.fontLight};
  margin: 0 5px;
  font-family: ${Fonts.PrimaryFontMedium};
`;
