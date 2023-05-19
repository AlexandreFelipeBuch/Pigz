import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: '#fff';
  border-radius: 8px;
  padding: 8px;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  height: 40px;
  margin-left: 2px;
  font-size: 14px;
  color: ${Colors.inputText};
`;
