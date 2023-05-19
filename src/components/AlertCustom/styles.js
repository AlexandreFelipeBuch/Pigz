import styled from 'styled-components/native';

import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const AlertContainer = styled.View`
  width: 90%;
  background-color: white;
  border-radius: 5px;
  align-items: center;
`;

export const IconView = styled.TouchableOpacity`
  left: 140px;
  margin: 15px;
`;
export const ViewLogo = styled.View`
  bottom: 25px;
`;
export const AlertHeaderView = styled.View`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.buttonColorPrimary};
`;
export const AlertHeaderText = styled.Text`
  font-size: 17px;
  padding: 10px;
  text-align: center;
  color: white;
  font-family: ${Fonts.PrimaryFont};
`;
export const MessageView = styled.View`
  padding: 10px;
`;

export const Message = styled.Text`
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  color: ${Colors.inputText};
  font-family: ${Fonts.PrimaryFont};
`;
export const MessageBlue = styled.Text`
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  color: ${Colors.blue};
  font-family: ${Fonts.PrimaryFont};
`;
