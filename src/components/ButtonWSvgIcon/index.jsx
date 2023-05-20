import React, { useState } from 'react';
import { Colors } from '../../config/Colors';
import { Container, ButtonText, Loading, Icon, IconAndTextView, ViewCheckBox } from './styles';
import { Checkbox, Switch } from 'react-native-paper';

const ButtonWSvgIcon = ({
  title,
  onPress,
  bgcolor,
  color,
  loading,
  primary,
  borderColor,
  borderWidth,

  checkBox,
  checkBoxValue,
  switchValueChange,
  children,
}) => {
  return (
    <>
      {loading ? (
        <Container onPress={onPress} bgcolor={bgcolor}>
          {primary ? (
            <Loading color={Colors.white} size={24} />
          ) : (
            <Loading color={Colors.white} size={24} />
          )}
        </Container>
      ) : (
        <Container
          onPress={onPress}
          bgcolor={bgcolor}
          borderWidth={borderWidth}
          borderColor={borderColor}
        >
          <IconAndTextView>
            {children}
            <ButtonText color={color}>{title}</ButtonText>
            {checkBox && (
              <ViewCheckBox>
                <Switch
                  value={checkBoxValue}
                  onValueChange={switchValueChange}
                  color={Colors.primary}
                />
              </ViewCheckBox>
            )}
          </IconAndTextView>
        </Container>
      )}
    </>
  );
};

export default ButtonWSvgIcon;
