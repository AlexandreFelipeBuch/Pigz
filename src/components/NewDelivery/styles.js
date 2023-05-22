import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';
import LinearGradient from 'react-native-linear-gradient';

export const DeliveryContainer = styled.View`
  elevation: 3;
  padding: 16px;
  background-color: ${Colors.background};
  border-radius: 16px;
  width: 85%;
  height: 206px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${Colors.fontColorDark};

  font-family: ${Fonts.PrimaryFontBold};
`;

export const RowText = styled.Text`
  font-size: 12px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 8px;
  height: 46px;
  border-width: 1px;
  border-color: ${Colors.primary};
  border-radius: 16px;
  margin-right: 10px;
`;
export const ButtonOk = styled.TouchableOpacity``;

export const ViewOk = styled(LinearGradient).attrs({
  colors: ['#FA641E', '#FF881F'],
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 },
})`
  width: 64px;
  height: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: ${Colors.fontLight};

  font-family: ${Fonts.PrimaryFontMedium};
`;

export const ScanContainer = styled(LinearGradient).attrs({
  colors: ['#FA641E', '#FF881F'],
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 },
})`
  flex-direction: row;
  height: 46px;
  align-items: center;
  margin-top: 20px;
  background: ${Colors.primary};
  align-items: center;
  justify-content: center;
  background-color: ${Colors.primary};
  border-radius: 16px;
`;

export const ScanText = styled.Text`
  font-size: 16px;
  color: ${Colors.fontLight};
  margin: 5px;
  font-family: ${Fonts.PrimaryFontMedium};
`;
export const ButtonScan = styled.TouchableOpacity``;
