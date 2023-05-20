import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';
import LinearGradient from 'react-native-linear-gradient';

export const DeliveryContainer = styled.View`
  elevation: 3;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 16px;
  width: 85%;
  height: 184px;
  align-self: center;
  margin: 20px 0;
`;

export const Title = styled.Text`
  font-size: 16px;

  color: ${Colors.fontColorDark};
  margin: 5px;
  font-family: ${Fonts.PrimaryFontBold};
`;

export const RowContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const SquareContainer = styled.View`
  flex: 1;
  align-items: center;
  width: 101px;
  height: 99px;
  border-width: 0.5px;
  border-radius: 16px;
  margin: 5px;
  border-color: ${Colors.gray_05};
  padding: 8px;
`;

export const RowText = styled.Text`
  color: ${Colors.gray_04};
  font-family: ${Fonts.PrimaryFont};
  font-size: 12px;
`;
export const RowTextNumber = styled.Text`
  font-size: 40px;
  color: ${Colors.fontColorDark};
  font-family: ${Fonts.PrimaryFontMedium};
`;
