import * as yup from 'yup';
import moment from 'moment';

export const NewPasswordValidate = yup.object().shape({
  password: yup
    .string()
    .required('Este é um campo obrigatório')
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'A senha deve ter pelo menos uma letra e um número'
    )
    .test(
      'valid-password',
      'A senha deve conter pelo menos 8 caracteres, uma letra e um número',
      (value) => {
        if (!value) {
          return true;
        }

        // Validar a senha aqui de acordo com as regras de negócio
        return true;
      }
    ),
  confirmPassword: yup
    .string()
    .required('Este é um campo obrigatório')
    .oneOf([yup.ref('password'), null], 'As senhas não coincidem')
    .test('valid-confirm-password', 'As senhas não coincidem', (value) => {
      if (!value) {
        return true;
      }

      // Validar a confirmação da senha aqui de acordo com as regras de negócio
      return true;
    }),
});

export const PasswordEmailValidate = yup.object().shape({
  email: yup.string().email('Email inválido').required('Digite o seu E-mail'),
});
export const PasswordCodeValidate = yup.object().shape({
  code: yup.string().required('Digite o codigo'),
});
