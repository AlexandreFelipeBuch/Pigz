import * as yup from 'yup';
import moment from 'moment';

export const signUpValidate = yup.object().shape({
  name: yup.string().required('Este é um campo obrigatório'),
  email: yup.string().email('Digite um e-mail válido').required('Este é um campo obrigatório'),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref('email'), null], 'Os e-mails não coincidem')
    .required('Este é um campo obrigatório'),
  cpf: yup
    .string()
    .required('Este é um campo obrigatório')
    .test('valid-cpf', 'CPF inválido', (value) => {
      if (!value) {
        return true;
      }

      // validação do CPF
      const cpf = value.replace(/[^\d]+/g, '');

      if (cpf.length !== 11) {
        return false;
      }

      // Verifica se todos os dígitos são iguais
      if (/^([0-9])\1+$/.test(cpf)) {
        return false;
      }

      // Valida 1o digito
      let add = 0;
      for (let i = 0; i < 9; i++) {
        add += parseInt(cpf.charAt(i)) * (10 - i);
      }

      let rev = 11 - (add % 11);
      if (rev === 10 || rev === 11) {
        rev = 0;
      }

      if (rev !== parseInt(cpf.charAt(9))) {
        return false;
      }

      // Valida 2o digito
      add = 0;
      for (let i = 0; i < 10; i++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
      }

      rev = 11 - (add % 11);
      if (rev === 10 || rev === 11) {
        rev = 0;
      }

      if (rev !== parseInt(cpf.charAt(10))) {
        return false;
      }

      return true;
    }),

  birthdate: yup
    .string()
    .transform((value, originalValue) => {
      const date = originalValue.split('/');
      const formattedDate = `${date[2]}-${date[1]}-${date[0]}`;
      return formattedDate;
    })
    .test('birthdate', 'Data inválida', function (value) {
      const { createError } = this;
      const { path } = this;
      const birthdate = moment(value, 'YYYY-MM-DD');
      const today = moment().startOf('day');
      if (!birthdate.isValid()) {
        return createError({ path, message: 'Data inválida' });
      }
      if (birthdate.isAfter(today)) {
        return createError({ path, message: 'Data inválida' });
      }
      return true;
    })
    .required('Este é um campo obrigatório'),

  phone: yup
    .string()
    .required('Este é um campo obrigatório')
    .test('valid-phone', 'Telefone inválido', (value) => {
      if (!value) {
        return true;
      }

      // validação do telefone
      const phoneRegex = /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/;
      return phoneRegex.test(value);
    }),

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
