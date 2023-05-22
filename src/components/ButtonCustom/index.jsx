import React from 'react';
import { Colors } from '../../config/Colors';
import { ButtonContainer, Container, ButtonText, Loading, Icon, ViewRow, ViewIcon } from './styles';
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
  iconColor,
}) => {
  return (
    <>
      {loading ? (
        <ButtonContainer onPress={onPress}>
          <Container bgcolor={bgcolor}>
            {primary ? (
              <Loading color={Colors.loadingLight} size={24} />
            ) : (
              <Loading color={Colors.loadingLight} size={24} />
            )}
          </Container>
        </ButtonContainer>
      ) : (
        <ButtonContainer onPress={onPress}>
          <Container
            disabled={disabled}
            bgcolor={bgcolor}
            borderWidth={borderWidth}
            borderColor={borderColor}
          >
            <ViewRow>
              {iconName ? (
                <ViewIcon>
                  <Icon iconColor={iconColor} name={iconName} />
                </ViewIcon>
              ) : null}
              <ButtonText color={color}>{title}</ButtonText>
            </ViewRow>
          </Container>
        </ButtonContainer>
      )}
    </>
  );
};

export default ButtonCustom;
