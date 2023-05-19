import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import ButtonCustom from '../../components/ButtonCustom';
import InputCustom from '../../components/InputCustom';
import { Colors } from '../../config/Colors';
import { Formik } from 'formik';
import { NewPasswordValidate } from '../../validation/PasswordValidate';

import {
  Container,
  ViewTitle,
  TextTitle,
  ViewPasswordOption,
  ViewInput,
  ViewButtons,
  ErrorMessage,
} from './styles';
import Header from '../../components/Header';
import PasswordOptions from '../../components/PasswordOptions';
import AlertPassword from '../../components/AlertPassword';
import { apiAuth } from '../../Services/Auth';

export default () => {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  console.log('PARAMS', params);
  const [showAlert, setShowAlert] = useState(false);
  const [passwordVal, setPasswordVal] = useState('close');

  const handleChangePassword = async (values) => {
    try {
      let body = {
        userName: params.email,
        codigo: params.code,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };
      const response = await apiAuth.changePassword(body);
      if (response?.status === 204) {
        console.log('Senha redefinida com sucesso!');
        setShowAlert(true);
      } else {
        console.log('Erro ao redefinir senha!');
      }
    } catch (error) {
      console.error('ERROR::', error);
      console.log('Erro ao redefinir senha');
    }
  };
  const handleBack = () => {
    setShowAlert(!showAlert);
    navigate('SignIn');
  };
  return (
    <Formik
      initialValues={{
        password: '',
        confirmPassword: '',
      }}
      onSubmit={handleChangePassword}
      validationSchema={NewPasswordValidate}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched,
        values,
        isSubmitting,
        isValid,
      }) => (
        <Container>
          <Header icon iconName={'chevron-left'} logo />

          <AlertPassword
            visible={showAlert}
            iconName="alert"
            email={values.email}
            onPress={() => handleBack()}
          />
          <ViewInput>
            <ViewTitle>
              <TextTitle>Digite a nova senha</TextTitle>
            </ViewTitle>
            <InputCustom
              inputPassword
              onBlur={handleBlur('password')}
              placeholder={'Digite a sua senha'}
              value={values.password}
              borderColor={Colors.inputBorder}
              onChangeText={handleChange('password')}
              secureTextEntry={true}
              onPressIn={() => setPasswordVal('open')}
              error={errors.password && touched.password}
            />
            <InputCustom
              inputPassword
              placeholder={'Confirme a sua senha'}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              borderColor={Colors.inputBorder}
              onChangeText={handleChange('confirmPassword')}
              secureTextEntry={true}
              error={errors.confirmPassword && touched.confirmPassword}
              errorMessage={
                touched.confirmPassword &&
                errors.confirmPassword && <ErrorMessage>{errors?.confirmPassword}</ErrorMessage>
              }
            />
            <ViewPasswordOption>
              <PasswordOptions
                password={values?.password}
                openClose={passwordVal}
                valid={isValid ? true : false}
              />
            </ViewPasswordOption>
          </ViewInput>

          <ViewButtons>
            <ButtonCustom
              loading={isSubmitting}
              title={'Continuar'}
              elevation={3}
              bgcolor={Colors.buttonColorPrimary}
              color={Colors.fontLight}
              onPress={handleSubmit}
            />
          </ViewButtons>
        </Container>
      )}
    </Formik>
  );
};
