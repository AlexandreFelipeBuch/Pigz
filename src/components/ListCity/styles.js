import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const Container = styled.View`
  flex: 1;
`;
export const ContentItem = styled.View`
  flex-direction: row;
  padding: 10px;
`;
export const ViewTitle = styled.View`
  flex: 1;
  margin-left: 5px;
`;
export const ViewDate = styled.View`
  border: 1px solid black;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 70%;
  margin-left: 10px;
`;
export const TextDate = styled.Text`
  font-size: 20px;
  top: 2px;
  color: ${Colors.primary};
  font-family: ${Fonts.PrimaryFontBold};
`;
export const TextCity = styled.Text`
  font-size: 18px;
  margin-left: 5px;
  top: 3px;
  color: ${Colors.primary};
  font-family: ${Fonts.PrimaryFontMedium};
`;
export const TextDescription = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  top: 10px;
  color: ${Colors.inputText};
  font-family: ${Fonts.PrimaryFontBold};
`;
export const TextCities = styled.Text`
  font-size: 13px;
  margin-left: 10px;
  top: 10px;
  color: ${Colors.inputText};
  font-family: ${Fonts.PrimaryFontMedium};
`;
export const Images = styled.Image`
  width: 230px;
  height: 130px;
  border-radius: 15px;
`;
export const ViewCityTitle = styled.View`
  flex-direction: row;
  padding: 5px;
  left: 5px;
  align-items: center;
`;
export const ViewCity = styled.View``;

export const ButtomIcon = styled.TouchableOpacity`
  align-items: flex-start;
  padding: 25px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs({
  size: 40,
})`
  right: 15px;
  top: 30px;
  color: ${Colors.inputText};
`;
export const TextEmpty = styled.Text`
  font-size: 15px;
  text-align: center;
  margin-top: 50px;
  color: ${Colors.inputText};
  font-family: ${Fonts.PrimaryFontMedium};
`;
