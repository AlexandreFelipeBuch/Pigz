import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';
import Logo from '../../assets/svg/pigz-logotipo-branco.svg';
import { Keyboard } from 'react-native';
import ButtonCustom from '../../components/ButtonCustom';
import InputCustom from '../../components/InputCustom';
import { Colors } from '../../config/Colors';
import { Formik } from 'formik';

import {
  Container,
  ViewLogo,
  ViewTitle,
  TextTitle,
  ViewInput,
  TextTitleInput,
  TextUpInput,
  ButtonRecoveryPassword,
  TextPassword,
  ViewButton,
  ViewButtons,
  Spacer,
  ErrorMessage,
} from './styles';
import { signInValidate } from '../../validation/signInValidate';
import { apiAuth } from '../../Services/Auth';
import { setItemAsync } from '../../utils';

export default () => {
  const { navigate } = useNavigation();
  const { state, dispatch } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    try {
      Keyboard.dismiss();
      setLoading(true);
      let dados = {
        userName: values.email,
        password: values.password,
      };
      const response = await apiAuth.login(dados);
      console.log('RESPONSE', JSON.stringify(response.data));
      if (response.success) {
        setItemAsync('token', response.data.token.accessToken);
        setItemAsync('user', response.data);
        dispatch({
          type: 'SET_USER',
          payload: {
            id: response.data.user.id,
            nome: response.data.user.nome,
            cpf: response.data.user.cpf,
            dataNascimento: response.data.user.dataNascimento,
            email: response.data.user.email,
            telefone: response.data.user.telefone,
          },
        });
        navigate('MainTab');
      } else {
        console.log(response.errors[0]);
      }
    } catch (error) {
      console.error('SIGNIN::HANDLESIGNIN', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: 'felipe.m.buch@gmail.com', password: 'a8felipe' }}
      onSubmit={handleLogin}
      validationSchema={signInValidate}
    >
      {({ handleChange, handleSubmit, handleBlur, errors, touched, values, isSubmitting }) => (
        <Container>
          <ViewLogo>
            <Logo width="100" height="50" />
            <TextTitle>Para entregadores</TextTitle>
          </ViewLogo>

          <ViewInput>
            <TextTitleInput>Login</TextTitleInput>
            <TextUpInput>Email ou Telefone</TextUpInput>
            <InputCustom
              inputSimple
              placeholder={'E-mail'}
              icon
              iconName={'email'}
              onBlur={handleBlur('email')}
              value={values.email}
              borderColor={Colors.primary}
              onChangeText={handleChange('email')}
              error={errors.email && touched.email}
              errorMessage={
                touched.email && errors.email && <ErrorMessage>{errors?.email}</ErrorMessage>
              }
            />
            <TextUpInput>Senha</TextUpInput>
            <InputCustom
              inputPassword
              icon
              iconName={'lock'}
              placeholder={'Senha'}
              onBlur={handleBlur('password')}
              borderColor={Colors.inputBorder}
              value={values.password}
              onChangeText={handleChange('password')}
              error={errors.password && touched.password}
              errorMessage={errors.password}
            />
            <ButtonRecoveryPassword onPress={() => navigate('ForgotPassword')}>
              <TextPassword>Esqueci minha senha</TextPassword>
            </ButtonRecoveryPassword>
          </ViewInput>

          <ViewButtons>
            <ViewButton>
              <ButtonCustom
                loading={isSubmitting}
                title={'Entrar'}
                elevation={3}
                bgcolor={Colors.buttonColorPrimary}
                color={Colors.fontLight}
                onPress={handleSubmit}
              />
            </ViewButton>
            <ViewButton style={{ marginBottom: 0 }}>
              <ButtonCustom
                title={'Criar Conta'}
                bgcolor={Colors.transparent}
                color={Colors.fontLight}
                onPress={() => navigate('SignUp')}
                elevation={0}
                borderWidth={'1px'}
                borderColor={Colors.fontLight}
              />
            </ViewButton>
          </ViewButtons>
        </Container>
      )}
    </Formik>
  );
};
