import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';
import LinearGradient from 'react-native-linear-gradient';

export const TextState = styled.Text`
  font-size: 17px;
  top: 2px;
  color: ${Colors.inputText};
  font-family: ${Fonts.PrimaryFontBold};
`;

export const ViewText = styled.View`
  flex-direction: row;
  margin: 5px 15px;
`;

export const ButtonClose = styled.TouchableOpacity`
  align-items: flex-end;
  padding: 10px;
`;
export const TextItem = styled.Text`
  font-size: 14px;
  top: 2px;
  color: ${Colors.inputText};
  font-family: ${Fonts.PrimaryFontMedium};
`;
