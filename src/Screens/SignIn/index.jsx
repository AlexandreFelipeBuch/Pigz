import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Keyboard, ScrollView } from 'react-native';
//-------------------------Configs----------------------------------------------------
import { Colors } from '../../config/Colors';
//-------------------------Validations------------------------------------------------
import { signInValidate } from '../../validation/signInValidate';
//-------------------------Components-------------------------------------------------
import { Formik } from 'formik';
import ButtonCustom from '../../components/ButtonCustom';
import InputCustom from '../../components/InputCustom';
import ButtonWSvgIcon from '../../components/ButtonWSvgIcon';
import GoogleSvg from '../../assets/svg/logo_google.svg';
import Logo from '../../assets/svg/pigz-logotipo-branco.svg';
import {
  Container,
  ViewLogo,
  TextTitle,
  ViewInput,
  TextTitleInput,
  TextUpInput,
  ButtonRecoveryPassword,
  TextPassword,
  ViewButton,
  ButtonRegister,
  TextRegister,
  ViewButtonGoogle,
  ViewTileEnter,
  TextEnter,
  ViewLine,
} from './styles';

export default () => {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    Keyboard.dismiss();
    setLoading(true);

    setTimeout(() => {
      navigate('MainTab');
      setLoading(false);
    }, 2000);
  };

  return (
    <Formik
      initialValues={{ email: 'felipe@gmail.com', password: 'a8felipe' }}
      onSubmit={handleLogin}
      validationSchema={signInValidate}
    >
      {({ handleChange, handleSubmit, handleBlur, errors, touched, values }) => (
        <Container>
          <ScrollView>
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
                onBlur={handleBlur('email')}
                value={values.email}
                borderColor={Colors.primary}
                onChangeText={handleChange('email')}
                error={errors.email && touched.email}
                errorMessage={errors.email}
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
            <ViewButton>
              <ButtonCustom
                loading={loading}
                title={'Entrar'}
                elevation={3}
                bgcolor={Colors.gradientPrimary}
                color={Colors.fontLight}
                onPress={handleSubmit}
              />
            </ViewButton>
            <ButtonRegister>
              <TextRegister color={Colors.fontColorGray}>
                Não tem uma Conta?
                <TextRegister color={Colors.primary}> Criar agora!</TextRegister>
              </TextRegister>
            </ButtonRegister>
            <ViewTileEnter>
              <TextEnter>Entrar com</TextEnter>
              <ViewLine />
            </ViewTileEnter>
            <ViewButtonGoogle>
              <ButtonWSvgIcon
                children={<GoogleSvg height="20" width="20" />}
                color={Colors.fontColorGray}
                title={'Continuar com o Google'}
                bgcolor={Colors.background}
              />
            </ViewButtonGoogle>
          </ScrollView>
        </Container>
      )}
    </Formik>
  );
};
