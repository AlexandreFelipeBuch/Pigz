import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#FF7F00', 'rgba(255, 230, 155, 1)', 'rgba(255, 230, 155, 1)'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
})`
  width: 100%;
  height: 120px;
  flex-direction: row;
`;
export const ViewTitle = styled.View`
  align-self: center;
`;
export const TextTitle = styled.Text`
  font-size: 20px;
  left: 3px;
  color: ${Colors.inputText};
  font-family: ${Fonts.PrimaryFontMedium};
`;

export const ViewLogo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;
export const ButtonIcon = styled.TouchableOpacity`
  align-items: center;
  margin: 25px 0 0 5px;
  height: 75px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs({
  size: 40,
})`
  left: 0px;
  top: 30px;
  color: ${Colors.inputText};
`;
