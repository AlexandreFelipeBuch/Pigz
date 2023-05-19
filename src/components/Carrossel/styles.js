import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  margin: 10px;
  justify-content: center;
  background: ${Colors.backgroundLight};
`;

export const ImageCarrousel = styled.Image`
  width: ${width - 30}px;
  height: 160px;
  border-radius: 15px;
  margin-horizontal: 5px;
`;
