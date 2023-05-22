import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const ViewItems = styled.View`
  flex-direction: row;
`;
export const TimelineContainer = styled.View`
  width: 300px;
  bottom: 20px;
`;

export const Line1 = styled.View`
  width: 1px;
  height: 30px;
  background-color: gray;
`;
export const Line2 = styled.View`
  width: 1px;
  height: 20px;
  bottom: 13px;
  background-color: gray;
`;
export const Line3 = styled.View`
  width: 1px;
  height: 45px;
  bottom: 45px;
  background-color: gray;
`;
export const Line4 = styled.View`
  width: 1px;
  height: 20px;
  bottom: 60px;
  background-color: gray;
`;

export const TimelineItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Ball = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: ${Colors.primary};
  right: 7px;
  top: 1px;
`;
export const Ball2 = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: ${Colors.primary};
  right: 7px;
  bottom: 45px;
`;
export const BallGray = styled.View`
  width: 9px;
  height: 9px;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid ${Colors.primary};
  right: 4px;
  bottom: 12px;
`;
export const BallGray2 = styled.View`
  width: 9px;
  height: 9px;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid ${Colors.primary};
  right: 4px;
  bottom: 60px;
`;

export const Title = styled.Text`
  color: ${Colors.primary};
  font-family: ${Fonts.PrimaryFontMedium};
  font-size: 18px;
  bottom: 4px;
  left: 7px;
`;
export const SubTitle = styled.Text`
  color: ${Colors.gray_01};
  font-family: ${Fonts.PrimaryFont};
  font-size: 14px;
  bottom: 20px;
  left: 8px;
`;
export const Title2 = styled.Text`
  color: ${Colors.primary};
  font-family: ${Fonts.PrimaryFontMedium};
  font-size: 18px;
  bottom: 52px;
  left: 7px;
`;
export const SubTitle2 = styled.Text`
  color: ${Colors.gray_01};
  font-family: ${Fonts.PrimaryFont};
  font-size: 14px;
  bottom: 68px;
  left: 8px;
`;

export const Description = styled.Text`
  margin-top: 5px;
`;
