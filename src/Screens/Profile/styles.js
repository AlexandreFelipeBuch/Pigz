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
  flex-direction: row;
  alignitems: center;
  padding-horizontal: 20px;
`;
export const TextExit = styled.Text`
  flex: 1;
  font-size: 16px;
  justify-content: flex-end;
  margin-bottom: 20px;
  align-items: flex-end;
  color: ${Colors.primary};
  font-family: ${Fonts.PrimaryFont};
  margin-left: 5px;
  top: 3px;
`;
