import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background: ${Colors.backgroundLight};
`;
export const ButtonExit = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-start;
  flex-direction: row;
  bottom: 50px;
  left: 2px;
  padding-horizontal: 20px;
`;
export const TextExit = styled.Text`
  font-size: 16px;
  color: ${Colors.fontColorGray};
  font-family: ${Fonts.PrimaryFont};
  margin-left: 5px;
  top: 3px;
`;
