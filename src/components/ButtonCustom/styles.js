import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fonts } from '../../config/Fonts';
import { Colors } from '../../config/Colors';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${(props) => `${props.bgcolor}`};

  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 100%;
  height: 55px;
  border-color: ${(props) => `${props.borderColor}`};
  border-width: ${(props) => `${props.borderWidth}`};
  elevation: ${(props) => `${props.elevation}`};
`;

export const ButtonText = styled.Text`
  color: ${(props) => `${props.color}`};
  padding: 12px 8px;
  font-family: ${Fonts.PrimaryFont};
  font-size: 16px;
`;

export const Loading = styled.ActivityIndicator`
  padding: 16px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs({
  size: 20,
})`
  color: ${Colors.textDark};
`;
export const ViewIcon = styled.View``;
export const ViewRow = styled.View`
  flex-direction: row;
  align-items: center;
`;
