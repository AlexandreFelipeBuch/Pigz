import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background: ${Colors.backgroundLight};
`;

export const ViewSearch = styled.View`
  flex-direction: row;
`;
