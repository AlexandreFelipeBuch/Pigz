import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fonts } from '../../config/Fonts';
import { Colors } from '../../config/Colors';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs((props) => ({
  colors: props.bgcolor,
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 },
}))`
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 100%;
  height: 48px;
  border-color: ${(props) => `${props.borderColor}`};
  border-width: ${(props) => `${props.borderWidth}`};
`;
export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  background: transparent;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 100%;
  height: 48px;
  border-color: ${(props) => `${props.borderColor}`};
  border-width: ${(props) => `${props.borderWidth}`};
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
  color: ${(props) => `${props.iconColor}`};
`;
export const ViewIcon = styled.View``;
export const ViewRow = styled.View`
  flex-direction: row;
  align-items: center;
`;
