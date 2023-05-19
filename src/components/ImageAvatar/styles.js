import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  margin: 15px 0 15px 0;
  height: 78px;
  width: 78px;
  border-radius: 50px;
  justify-content: center;
  align-self: center;
`;
export const ButtonPhoto = styled.TouchableOpacity`
  flex: 1;
  align-self: center;
  justify-content: center;

  width: 78px;
  height: 78px;
  border-radius: 50px;
  margin: 2px;
`;
export const ImageBackgroundProfile = styled.ImageBackground`
  flex: 1;
`;
export const ViewImage = styled.View`
  align-items: center;
  top: 1px;
`;
export const ImageProfile = styled.Image`
  height: 78px;
  width: 78px;
  background-color: '#f2f2fC';
  overflow: hidden;
  border-color: ${Colors.primary};
  border-radius: 50px;
  top: 1px;
  opacity: 0.8;
`;
