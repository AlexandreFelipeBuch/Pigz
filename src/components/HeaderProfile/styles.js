import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#FA641E', '#FF881F'],
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 },
})`
  height: 230px;
`;

export const ViewLogo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ViewTitle = styled.View`
  align-self: center;
`;

export const ViewTextProfile = styled.View`
  margin-left: 20px;
`;
export const ButtonIcon = styled.TouchableOpacity`
  align-items: flex-start;
  padding: 25px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs({
  size: 24,
})`
  right: 15px;
  top: 30px;
  color: ${Colors.fontLight};
`;
export const TextName = styled.Text`
  font-size: 18px;
  color: ${Colors.fontLight};
  font-family: ${Fonts.PrimaryFontBold};
`;
export const TextEmail = styled.Text`
  font-size: 13px;
  color: ${Colors.fontLight};
  font-family: ${Fonts.PrimaryFont};
`;
