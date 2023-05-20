import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${(props) => `${props.bgcolor}`};
  margin: 0px 0px;
  align-self: center;
  justify-content: center;
  border-radius: 16px;
  width: 100%;
  height: 48px;
  align-items: center;
  border: 1px solid ${Colors.gray_02};
`;

export const ButtonText = styled.Text`
  color: ${(props) => `${props.color}`};
  padding: 12px 8px;
  font-family: ${Fonts.PrimaryFontMedium};
  font-size: 16px;
  font-weight: 900;
  padding-left: 16%;
`;

export const Loading = styled.ActivityIndicator`
  padding: 16px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs({
  size: 30,
})`
  color: ${Colors.textDark};
`;

export const IconAndTextView = styled.View`
  align-self: flex-start;
  margin-left: 30px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;
export const ViewCheckBox = styled.View`
  flex: 1;
  padding-right: 10px;
`;
