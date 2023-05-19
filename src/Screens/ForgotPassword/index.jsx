import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import ButtonCustom from '../../components/ButtonCustom';
import InputCustom from '../../components/InputCustom';
import { Colors } from '../../config/Colors';
import { Formik } from 'formik';
import { PasswordEmailValidate } from '../../validation/PasswordValidate';

import {
  Container,
  ViewTitle,
  TextTitle,
  TextMessage,
  TextFooter,
  ViewInput,
  ViewButton,
  ViewButtons,
  ErrorMessage,
  ErrorOutMessage,
} from './styles';
import Header from '../../components/Header';
import { apiAuth } from '../../Services/Auth';

export default () => {
  const { navigate } = useNavigation();
  const [errorMgs, setErrorMgs] = useState('');

  const handleResetPassword = async (values) => {
    console.log('VALUESPASSWORD', values.email);
    try {
      const response = await apiAuth.sendCodeToEmail(values.email);
      if (Number(response.status) === 204) {
        console.log('Código enviado para o seu email');
        navigate('PasswordCode', values.email);
      } else {
        setErrorMgs('Erro ao enviar o código, verifique se seu email está cadastrado');
      }
    } catch (error) {
      console.error('handleEmailVerificationButtonERROR:::', error);
      console.log('Erro ao enviar o código, verifique se seu email está cadastrado');
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      onSubmit={handleResetPassword}
      validationSchema={PasswordEmailValidate}
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
          <ViewTitle>
            <TextTitle>Esqueci minha senha</TextTitle>
            <TextMessage>
              Digite seu e-mail cadastrado na plataforma Chama Ingressos. Nós enviaremos um e-mail
              com um código para redefinição de senha.
            </TextMessage>
            <TextFooter>Ele permanecerá ativo durante 4 horas!</TextFooter>
          </ViewTitle>

          <ViewInput>
            <InputCustom
              inputSimple
              onBlur={handleBlur('email')}
              placeholder={'Digite o seu e-mail'}
              value={values.email}
              borderColor={Colors.inputBorder}
              onChangeText={handleChange('email')}
              error={errors.email && touched.email}
              errorMessage={
                touched.email && errors.email && <ErrorMessage>{errors?.email}</ErrorMessage>
              }
            />
            {errorMgs !== '' && <ErrorOutMessage>{errorMgs}</ErrorOutMessage>}
          </ViewInput>

          <ViewButtons>
            <ViewButton>
              <ButtonCustom
                loading={isSubmitting}
                title={'Cancelar'}
                elevation={0}
                bgcolor={Colors.fontLight}
                color={Colors.buttonColorPrimary}
                borderWidth={'1px'}
                borderColor={Colors.primary}
                onPress={() => navigate('SignIn')}
              />
            </ViewButton>
            <ViewButton>
              <ButtonCustom
                loading={isSubmitting}
                title={'Continuar'}
                elevation={3}
                bgcolor={Colors.buttonColorPrimary}
                color={Colors.fontLight}
                onPress={handleSubmit}
              />
            </ViewButton>
          </ViewButtons>
        </Container>
      )}
    </Formik>
  );
};
