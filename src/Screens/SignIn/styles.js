import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: ${Colors.background}
  align-items: center;
`;

export const ViewLogo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
`;
export const ViewTitle = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TextTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-top: 5px;
  color: ${Colors.fontColorDark};
  font-family: ${Fonts.PrimaryFontSemiBold};
`;

export const ViewInput = styled.View`
  flex: 1;
  background-color: ${Colors.background};
  justify-content: center;
  align-self: center;
  width: 90%;
`;
export const TextTitleInput = styled.Text`
  font-size: 16px;
  text-align: left;
  margin-bottom: 10px;
  color: ${Colors.fontColorDark};
  font-family: ${Fonts.PrimaryFontSemiBold};
`;
export const TextUpInput = styled.Text`
  font-size: 13px;
  text-align: left;
  color: ${Colors.fontColorDark};
  font-family: ${Fonts.PrimaryFont};
`;
export const ButtonRecoveryPassword = styled.TouchableOpacity`
  width: 90%;
`;

export const TextPassword = styled.Text`
  font-size: 13px;
  text-decoration-line: underline;
  text-align: left;
  left: 5px;
  color: ${Colors.fontColorDark};
  font-family: ${Fonts.PrimaryFont};
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
export const Spacer = styled.View`
  height: 20px;
`;
export const ErrorMessage = styled.Text`
  font-size: 12px;
  color: ${Colors.error};
  padding: 5px;
  left: 10px;
  font-weight: 500;
  width: 90%;
`;
