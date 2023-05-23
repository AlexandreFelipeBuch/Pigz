import styled from 'styled-components/native';

import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const Container = styled.View`
  width: 100%;
`;
export const InputArea = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${Colors.background};
  flex-direction: row;
  border: 1px solid ${(props) => `${props.borderColor}`};
  border-radius: 16px;
  padding: 0 10px 0 10px;
  align-items: center;
`;
export const Input = styled.TextInput`
  flex: 1;
  font-size: 14px;
  color: ${Colors.fontColorGray};
  padding-left: 8px;
  font-family: ${Fonts.PrimaryFont};
`;
export const ButtonEye = styled.TouchableOpacity``;
export const ButtonEdit = styled.TouchableOpacity``;
export const TextError = styled.Text`
  font-size: 12px;
  color: ${Colors.error};
  left: 5px;

  font-weight: 500;
  width: 90%;
  font-family: ${Fonts.PrimaryFont};
`;
export const ViewIcon = styled.View`
  bottom: 2px;
`;
