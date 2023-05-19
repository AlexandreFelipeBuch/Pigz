import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import ButtonCustom from '../../components/ButtonCustom';
import InputCustom from '../../components/InputCustom';
import { Colors } from '../../config/Colors';
import { Formik } from 'formik';
import { PasswordCodeValidate } from '../../validation/PasswordValidate';

import {
  Container,
  TextTitle,
  ViewInput,
  ViewButtons,
  ErrorMessage,
  ErrorOutMessage,
} from './styles';
import Header from '../../components/Header';
import { apiAuth } from '../../Services/Auth';

export default () => {
  const { navigate } = useNavigation();
  const [errorMgs, setErrorMgs] = useState('');
  const { params } = useRoute();

  const handleVerifyCode = async (values) => {
    try {
      const response = await apiAuth.verificationCodeAutentication(params, values.code);
      if (response.success) {
        console.log('Código autenticado com sucesso');
        navigate('NewPassword', {
          email: params,
          code: values.code,
        });
      } else {
        setErrorMgs('Código inválido!');
      }
    } catch (error) {
      console.error('erro dentro de successpassword', error);
    }
  };
  console.log(params);

  return (
    <Formik
      initialValues={{
        code: '',
      }}
      onSubmit={handleVerifyCode}
      validationSchema={PasswordCodeValidate}
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
          <ViewInput>
            <TextTitle>
              Digite o código que enviamos para o seu e-mail. Se necessário, verifique a caixa de
              spam.
            </TextTitle>
            <InputCustom
              inputSimple
              onBlur={handleBlur('code')}
              placeholder={'Digite o código'}
              value={values.code}
              borderColor={Colors.inputBorder}
              onChangeText={handleChange('code')}
              error={errors.code && touched.code}
              errorMessage={
                touched.code && errors.code && <ErrorMessage>{errors?.code}</ErrorMessage>
              }
            />
            {errorMgs !== '' && <ErrorOutMessage>{errorMgs}</ErrorOutMessage>}
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
