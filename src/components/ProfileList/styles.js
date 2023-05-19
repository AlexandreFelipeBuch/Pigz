import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const Container = styled.View`
  flex: 1;
  margin-top: 40px;
`;
export const ButtonList = styled.TouchableOpacity`
  flex-direction: row;
  alignitems: center;
  padding-horizontal: 20px;
`;
export const TextItem = styled.Text`
  flex: 1;
  font-size: 16px;
  color: ${Colors.inputText};
  font-family: ${Fonts.PrimaryFont};
  margin-left: 10px;
  top: 7px;
`;
export const ButtonExit = styled.TouchableOpacity`
  flex-direction: row;
  alignitems: center;
  padding-horizontal: 20px;
`;
export const TextExit = styled.Text`
  flex: 1;
  font-size: 16px;
  background-color: ${Colors.primary}
  justify-content: flex-end;
  align-items: flex-end;
  color: ${Colors.primary};
  font-family: ${Fonts.PrimaryFont};
  margin-left: 10px;
  top: 7px;
`;
