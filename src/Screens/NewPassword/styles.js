import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background: ${Colors.backgroundLight};
`;

export const ViewTitle = styled.View`
  margin-top: 150px;
  margin-bottom: 10px;
  align-items: flex-start;

  left: 5px;
  background-color: ${Colors.background};
`;

export const TextTitle = styled.Text`
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  color: ${Colors.inputBorder};
  font-family: ${Fonts.PrimaryFontBold};
`;
export const TextMessage = styled.Text`
  font-size: 12px;
  line-height: 25px;
  text-align: center;
  color: ${Colors.inputBorder};
  font-family: ${Fonts.PrimaryFont};
`;
export const TextFooter = styled.Text`
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: ${Colors.inputText};
  font-family: ${Fonts.PrimaryFont};
`;

export const ViewInput = styled.View`
  flex: 1;
  background-color: ${Colors.background};
  justify-content: center;
  align-self: center;
  width: 90%;
`;
export const ViewPasswordOption = styled.View`
  background-color: ${Colors.background};
  margin-top: 20px;
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
  background-color: transparent;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  align-self: center;
  margin-bottom: 20px;
  width: 90%;
`;
export const ViewButton = styled.View`
  width: 45%;
`;

export const ErrorMessage = styled.Text`
  font-size: 12px;
  color: ${Colors.error};
  padding: 5px;
  left: 10px;
  font-weight: 500;
  width: 90%;
`;
