import * as yup from 'yup';

export const signInValidate = yup.object().shape({
  email: yup.string().email('Email inválido').required('Digite o seu E-mail'),
  password: yup.string().required('Digite a sua Senha'),
});
