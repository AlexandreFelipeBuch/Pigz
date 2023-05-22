import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../../config/Fonts';

export const Container = styled.View`
  flex: 1;
  background: ${Colors.backgroundLight};
  align-items: center;
`;
export const ViewTitle = styled.View`
  width: 100%;
  flex-direction: row;
  margin: 10px;
  justify-content: space-between;
  background: ${Colors.backgroundLight};
`;
export const ViewRow = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${Colors.gray_01};
  font-family: ${Fonts.PrimaryFont};
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  color: ${Colors.primary};
  font-family: ${Fonts.PrimaryFontBold};
`;

export const Separator = styled.View`
  height: 2px;
  width: 90%;
  background: ${Colors.gray_01};
  opacity: 0.5;
  margin-bottom: 20px;
`;

export const ValueLabel = styled.Text`
  font-size: 14px;
  color: ${Colors.gray_01};
  font-family: ${Fonts.PrimaryFont};
`;

export const Value = styled.Text`
  font-size: 35px;
  color: ${Colors.primary};
  font-family: ${Fonts.PrimaryFontBold};
`;

export const ButtonDelivery = styled.TouchableOpacity`
  width: 100%;
  align-self: center;
  justify-content: center;
  margin: 20px 0;
`;
export const ViewDelivery = styled(LinearGradient).attrs({
  colors: ['#FA641E', '#FF881F'],
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 },
})`
  align-self: center;
  padding-left: 20px;
  flex-direction: row;
  width: 90%;
  height: 50px;
  align-items: center;
  border-radius: 16px;
`;
export const ViewDeliveryText = styled.View`
  flex: 1;
`;
export const ViewTimeLine = styled.View`
  flex: 1;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  top: 3px;
  margin: 0 0 0 15px;
  color: ${Colors.fontLight};
  font-family: ${Fonts.PrimaryFontMedium};
`;
export const TextTotal = styled.Text`
  font-size: 12px;
  bottom: 3px;
  margin: 0 0 0 15px;
  color: ${Colors.fontLight};
  font-family: ${Fonts.PrimaryFont};
`;
export const ViewButton = styled.View`
  align-self: center;
  margin-bottom: 15px;
  width: 90%;
`;
