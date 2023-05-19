import React, { useState } from 'react';
import { Colors } from '../../config/Colors';
import { Container, InputArea, Input, ButtonEye, TextError, ViewIcon, ButtonEdit } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInputMask } from 'react-native-masked-text';

const InputCustom = ({
  onFocus,
  placeholder,
  onPressIn,
  value,
  onChangeText,
  inputPassword,
  inputMasked,
  inputSimple,
  keyboardType,
  onBlur,
  maxLength,
  disabled,
  editable,
  borderColor,
  icon,
  iconName,
  error,
  errorMessage,
  options,
  inputEdit,
  iconEdit,
  type = 'cpf',
}) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  console.log(type);
  return (
    <Container>
      {inputPassword && (
        <InputArea borderColor={error ? Colors.error : borderColor}>
          <Input
            placeholder={placeholder}
            onFocus={onFocus}
            editable={editable}
            onBlur={onBlur}
            onPressIn={onPressIn}
            placeholderTextColor={Colors.inputText}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            maxLength={maxLength}
            disabled={disabled}
            secureTextEntry={!passwordIsVisible ? true : false}
          />
          {inputEdit && (
            <ButtonEdit>
              <Icon name={iconEdit} size={28} color={Colors.inputText} />
            </ButtonEdit>
          )}
          {error && <Icon name="alert-circle-outline" size={22} color={Colors.error} />}
          {!error && (
            <ButtonEye onPress={() => setPasswordIsVisible(!passwordIsVisible)}>
              <Icon
                name={passwordIsVisible ? 'eye-outline' : 'eye-off-outline'}
                size={25}
                color={Colors.primary}
              />
            </ButtonEye>
          )}
        </InputArea>
      )}
      {inputSimple && (
        <InputArea borderColor={error ? Colors.error : borderColor}>
          <Input
            placeholder={placeholder}
            onBlur={onBlur}
            editable={editable}
            placeholderTextColor={Colors.inputText}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            maxLength={maxLength}
            disabled={disabled}
          />
          {inputEdit && (
            <ButtonEdit>
              <Icon name={iconEdit} size={28} color={Colors.inputText} />
            </ButtonEdit>
          )}
          {error && <Icon name="alert-circle-outline" size={22} color={Colors.error} />}
        </InputArea>
      )}
      {inputMasked && (
        <InputArea borderColor={error ? Colors.error : borderColor}>
          {icon && <Icon name={iconName} size={22} color={Colors.inputText} />}
          <TextInputMask
            type={type}
            options={options}
            editable={editable}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            maxLength={14}
            disabled={disabled}
            style={{ flex: 1, color: Colors.inputText, paddingLeft: 8 }}
            placeholder={placeholder}
            placeholderTextColor={Colors.inputText}
          />
          {inputEdit && (
            <ButtonEdit>
              <Icon name={iconEdit} size={28} color={Colors.inputText} />
            </ButtonEdit>
          )}
          {error && <Icon name="alert-circle-outline" size={22} color={Colors.error} />}
        </InputArea>
      )}

      <TextError>{error && errorMessage} </TextError>
    </Container>
  );
};

export default InputCustom;
