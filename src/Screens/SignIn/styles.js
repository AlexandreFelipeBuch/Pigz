import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.background};
`;

export const ViewLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin: 100px 0 40px 0;
  width: 100%;
`;

export const TextTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-top: 5px;
  color: ${Colors.fontColorDark};
  font-family: ${Fonts.PrimaryFontSemiBold};
`;

export const ViewInput = styled.View`
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
  justify-content: center;
  margin: 0 0 25px 0;
  width: 90%;
`;
export const TextPassword = styled.Text`
  font-size: 13px;
  text-decoration-line: underline;
  text-align: left;
  left: 5px;
  color: ${Colors.fontColorGray};
  font-family: ${Fonts.PrimaryFont};
`;

export const ViewButton = styled.View`
  align-self: center;
  width: 90%;
`;

export const ButtonRegister = styled.TouchableOpacity`
  align-self: center;
  margin: 30px;
`;
export const TextRegister = styled.Text`
  font-size: 13px;
  text-align: left;
  left: 5px;
  color: ${(props) => `${props.color}`};
  font-family: ${Fonts.PrimaryFont};
`;
export const ViewLine = styled.View`
  width: 75%;
  margin: 12px 10px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${Colors.gray_01};
`;
export const TextEnter = styled.Text`
  font-size: 13px;
  text-align: left;
  left: 5px;
  color: ${Colors.fontColorDark};
  font-family: ${Fonts.PrimaryFontSemiBold};
`;
export const ViewTileEnter = styled.View`
  flex-direction: row;
  margin-left: 20px;
  width: 90%;
`;
export const ViewButtonGoogle = styled.View`
  align-self: center;
  width: 90%;
  margin: 20px 0 80px 0;
`;
