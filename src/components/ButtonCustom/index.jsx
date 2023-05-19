import React from 'react';
import { Colors } from '../../config/Colors';
import { Container, ButtonText, Loading, Icon, ViewRow, ViewIcon } from './styles';

const ButtonCustom = ({
  title,
  disabled,
  onPress,
  bgcolor,
  color,
  loading,
  primary,
  borderColor,
  borderWidth,
  iconName,
  elevation,
}) => {
  return (
    <>
      {loading ? (
        <Container onPress={onPress} bgcolor={bgcolor}>
          {primary ? (
            <Loading color={Colors.loadingLight} size={24} />
          ) : (
            <Loading color={Colors.loadingLight} size={24} />
          )}
        </Container>
      ) : (
        <Container
          elevation={elevation}
          disabled={disabled}
          onPress={onPress}
          bgcolor={bgcolor}
          borderWidth={borderWidth}
          borderColor={borderColor}
        >
          <ViewRow>
            {iconName ? (
              <ViewIcon>
                <Icon name={iconName} />
              </ViewIcon>
            ) : null}
            <ButtonText color={color}>{title}</ButtonText>
          </ViewRow>
        </Container>
      )}
    </>
  );
};

export default ButtonCustom;
