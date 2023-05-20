import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const Container = styled.View`
  background-color: ${Colors.background};
  width: 100%;
  height: 120px;
  flex-direction: row;
`;
export const ViewTitle = styled.View`
  align-self: center;
`;
export const TextTitle = styled.Text`
  font-size: 18px;
  right: 40px;
  bottom: 20px;
  color: ${Colors.fontColorDark};
  font-family: ${Fonts.PrimaryFontMedium};
`;

export const ViewLogo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;
export const ButtonIcon = styled.TouchableOpacity`
  margin: 20px 20px;
  align-items: center;
  justify-content: center;
  height: 75px;
`;
