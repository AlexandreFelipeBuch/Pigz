import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.SafeAreaView`
  background-color: ${Colors.background};
  flex-direction: row;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ImageButton = styled.Image`
  width: 30px;
  height: 30px;
  margin: 8px;
  resize-mode: contain;
`;

export const TextButton = styled.Text`
  color: ${Colors.textDark};
  font-size: 15px;
  font-weight: 600;
  bottom: 10px;
`;
