import React, { useState } from 'react';
import { RectangleContainer, RowContainer, TextValue, TextTitle } from './styles';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';

const DailyEarnings = () => {
  const [showValue, setShowValue] = useState(true);

  const toggleValueVisibility = () => {
    setShowValue(!showValue);
  };

  return (
    <RectangleContainer>
      <RowContainer>
        <TextTitle>Ganhos do Dia</TextTitle>
        <TextTitle>29/07</TextTitle>
      </RowContainer>
      <RowContainer>
        {showValue && <TextValue>R$ 150</TextValue>}
        <TouchableOpacity onPress={toggleValueVisibility}>
          <Icon
            name={showValue ? 'eye-outline' : 'eye-off-outline'}
            size={28}
            color={Colors.fontLight}
            style={{ right: 5 }}
          />
        </TouchableOpacity>
      </RowContainer>
    </RectangleContainer>
  );
};

export default DailyEarnings;
