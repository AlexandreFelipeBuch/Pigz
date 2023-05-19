import { BASE_URL } from '../config/GlobalURLs';

export const apiAuth = {
  // Criar Úsuario
  registerUser: async (user) => {
    console.log('API::createProfile: ', user);
    try {
      let req = await fetch(`${BASE_URL}/v1/autenticacao/registrar-usuario`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      console.log('API::createProfile: ', req);
      let json = await req.json();
      return json;
    } catch (error) {
      console.log('API::createProfile: ' + error);
    }
  },

  //Login cliente
  login: async (body) => {
    console.log('\n\nBODY', JSON.stringify(body));
    try {
      let req = await fetch(`${BASE_URL}/v1/autenticacao/entrar`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      });
      console.log('::login::REQ', req);
      let json = await req.json();
      return json;
    } catch (error) {
      console.error('::login::ERROR', error);
    }
  },

  //Validação de Token
  token: async (body) => {
    console.log('\n\nBODY', JSON.stringify(body));
    try {
      let req = await fetch(`${BASE_URL}/v1/autenticacao/validar-token`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      });
      console.log('::token::REQ', req);
      let json = await req.json();
      return json;
    } catch (error) {
      console.error('::token::ERROR', error);
    }
  },
  //Alterar senha
  changePassword: async (body) => {
    try {
      let req = await fetch(`${BASE_URL}/v1/autenticacao/alterar-senha`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      });
      console.log('API::SendEmailResetPassword: ', req);
      return req.status === 204 ? req : await req.json();
    } catch (error) {
      console.log('API::SendEmailResetPassword:  ' + error);
    }
  },
  //Enviar código para email

  sendCodeToEmail: async (userName) => {
    try {
      let req = await fetch(`${BASE_URL}/v1/autenticacao/alterar-senha/${userName}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      });
      console.log('SENDCODETOEMAIL::sendCodeToEmail: ', req);
      return req;
    } catch (error) {
      console.log('ERROR::sendCodeToEmail: ', error);
    }
  },

  verificationCodeAutentication: async (userName, verificationCode) => {
    try {
      const req = await fetch(
        `${BASE_URL}/v1/autenticacao/validar-codigo/${userName}/${verificationCode}`,
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      console.log('VCODE::verificationCodeAutentication::REQ', req);
      const json = await req.json();
      return json;
    } catch (error) {
      console.log('VCODE::verificationCodeAutentication::ERROR', error);
    }
  },
};
