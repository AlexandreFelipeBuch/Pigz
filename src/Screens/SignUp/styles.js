import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background: ${Colors.backgroundLight};
`;
export const Scroller = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const ViewTitle = styled.View`
  margin: 20px 0;
`;

export const TextTitle = styled.Text`
  font-size: 18px;
  color: ${Colors.inputBorder};
  font-family: ${Fonts.PrimaryFontMedium};
`;

export const ViewInput = styled.View`
  flex: 1;
  background-color: ${Colors.background};
  justify-content: center;
  align-self: center;
  width: 90%;
`;
export const TextInput = styled.Text`
  font-size: 14px;
  left: 3px;
  color: ${Colors.inputText};
  font-family: ${Fonts.PrimaryFontMedium};
`;
export const ViewButtons = styled.View`
  flex: 1;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100%;
`;
export const ViewButton = styled.View`
  margin: 10px;
  align-self: center;
  width: 90%;
`;

export const ErrorMessage = styled.Text`
  font-size: 12px;
  color: ${Colors.error};
  padding: 5px;
  left: 10px;
  font-weight: 500;
  width: 90%;
`;

export const ErrorOutMessage = styled.Text`
  font-size: 12px;
  color: ${Colors.error};
  left: 5px;
  bottom: 15px;
  font-weight: 500;
  width: 90%;
`;
