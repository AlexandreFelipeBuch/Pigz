import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ButtonCustom from '../../components/ButtonCustom';
import InputCustom from '../../components/InputCustom';
import { Colors } from '../../config/Colors';
import { Formik } from 'formik';
import { signUpValidate } from '../../validation/signUpValidate';
import { Keyboard } from 'react-native';
import {
  Container,
  Scroller,
  ViewTitle,
  TextTitle,
  ViewInput,
  TextInput,
  ViewButton,
  ViewButtons,
  ErrorMessage,
  ErrorOutMessage,
} from './styles';
import Header from '../../components/Header';
import PasswordOptions from '../../components/PasswordOptions';
import AlertCustom from '../../components/AlertCustom';
import { apiAuth } from '../../Services/Auth';
import { formatCpf, invertDate } from '../../utils';

export default () => {
  const { navigate } = useNavigation();
  const [passwordVal, setPasswordVal] = useState('close');
  const [showAlert, setShowAlert] = useState(false);
  const [showMail, setshowMail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMgs, setErrorMgs] = useState('');

  const handleBack = () => {
    setShowAlert(!showAlert);
    navigate('SignIn');
  };

  const handleSignUp = async (values) => {
    console.log('VALUES', values);

    const userData = {
      userName: values.email,
      tipoUsuario: 0,
      nome: values.name,
      email: values.email,
      confirmEmail: values.confirmEmail,
      cpf: formatCpf(values.cpf),
      dataNascimento: invertDate(values.birthdate),
      phone: values.phone,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };
    try {
      Keyboard.dismiss();
      setLoading(true);
      let response = await apiAuth.registerUser(userData);
      if (response.success) {
        setShowAlert(true);
      } else {
        setErrorMgs(response.errors[0]);
        console.error('SIGNUP::ERRORS', response.errors[0]);
      }
    } catch (error) {
      console.error('SIGNUP::', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        confirmEmail: '',
        cpf: '',
        birthdate: '',
        phone: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={handleSignUp}
      validationSchema={signUpValidate}
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
          <AlertCustom
            visible={showAlert}
            iconName="alert"
            headerText={'COMFIRME SEU'}
            alertType={'confirmation'}
            email={values.email}
            onPress={() => handleBack()}
          />
          <Scroller>
            <Header icon iconName={'chevron-left'} logo />
            <ViewInput>
              <ViewTitle>
                <TextTitle>Crie sua conta</TextTitle>
              </ViewTitle>
              <TextInput>Nome completo*</TextInput>
              <InputCustom
                inputSimple
                onBlur={handleBlur('name')}
                value={values.name}
                borderColor={Colors.inputBorder}
                onChangeText={handleChange('name')}
                error={errors.name && touched.name}
                errorMessage={
                  touched.name && errors.name && <ErrorMessage>{errors?.name}</ErrorMessage>
                }
              />
              <TextInput>E-mail*</TextInput>
              <InputCustom
                inputSimple
                onBlur={handleBlur('email')}
                value={values.email}
                borderColor={Colors.inputBorder}
                onChangeText={handleChange('email')}
                error={errors.email && touched.email}
                errorMessage={
                  touched.email && errors.email && <ErrorMessage>{errors?.email}</ErrorMessage>
                }
              />
              {errorMgs.includes(`O nome de usuário '${values.email}' já está em uso.`) && (
                <ErrorOutMessage>E-mail {values.email} já cadastrado.</ErrorOutMessage>
              )}
              <TextInput>Confirmar e-mail*</TextInput>
              <InputCustom
                inputSimple
                onBlur={handleBlur('confirmEmail')}
                value={values.confirmEmail}
                borderColor={Colors.inputBorder}
                onChangeText={handleChange('confirmEmail')}
                error={errors.confirmEmail && touched.confirmEmail}
                errorMessage={
                  touched.confirmEmail &&
                  errors.confirmEmail && <ErrorMessage>{errors?.confirmEmail}</ErrorMessage>
                }
              />
              <TextInput>CPF*</TextInput>
              <InputCustom
                inputMasked
                type={'cpf'}
                options={{ mask: '999.999.999-99' }}
                onBlur={handleBlur('cpf')}
                value={values.cpf}
                keyboardType={'numeric'}
                borderColor={Colors.inputBorder}
                onChangeText={handleChange('cpf')}
                error={errors.cpf && touched.cpf}
                errorMessage={
                  touched.cpf && errors.cpf && <ErrorMessage>{errors?.cpf}</ErrorMessage>
                }
              />
              {errorMgs.includes(`Já existe um usuário com esse CPF`) && (
                <ErrorOutMessage>CPF já cadastrado.</ErrorOutMessage>
              )}
              <TextInput>Data de nascimento*</TextInput>
              <InputCustom
                inputMasked
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY',
                }}
                keyboardType={'numeric'}
                onBlur={handleBlur('birthdate')}
                value={values.birthdate}
                borderColor={Colors.inputBorder}
                onChangeText={handleChange('birthdate')}
                error={errors.birthdate && touched.birthdate}
                errorMessage={
                  touched.birthdate &&
                  errors.birthdate && <ErrorMessage>{errors?.birthdate}</ErrorMessage>
                }
              />
              <TextInput>Telefone*</TextInput>
              <InputCustom
                inputMasked
                type={'cel-phone'}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99)',
                }}
                keyboardType={'numeric'}
                onBlur={handleBlur('phone')}
                value={values.phone}
                maxLength={16}
                borderColor={Colors.inputBorder}
                onChangeText={handleChange('phone')}
                error={errors.phone && touched.phone}
                errorMessage={
                  touched.phone && errors.phone && <ErrorMessage>{errors?.phone}</ErrorMessage>
                }
              />
              <TextInput>Senha*</TextInput>
              <InputCustom
                inputPassword
                onBlur={handleBlur('password')}
                value={values.password}
                borderColor={Colors.inputBorder}
                onChangeText={handleChange('password')}
                secureTextEntry={true}
                onPressIn={() => setPasswordVal('open')}
                error={errors.password && touched.password}
              />
              <PasswordOptions
                password={values?.password}
                openClose={passwordVal}
                valid={isValid ? true : false}
              />
              <TextInput>Confirmar senha*</TextInput>
              <InputCustom
                inputPassword
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
            </ViewInput>

            <ViewButtons>
              <ViewButton>
                <ButtonCustom
                  loading={isSubmitting}
                  title={'Cadastrar'}
                  elevation={3}
                  bgcolor={Colors.buttonColorPrimary}
                  color={Colors.fontLight}
                  onPress={handleSubmit}
                />
              </ViewButton>
            </ViewButtons>
          </Scroller>
        </Container>
      )}
    </Formik>
  );
};
