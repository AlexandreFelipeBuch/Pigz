import { useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../config/Colors';
import Logo from '../../assets/svg/pigz-logotipo-branco.svg';
import { Container, LoadingIcon } from './styles';
import { getItemAsync } from '../../utils';
import { apiAuth } from '../../Services/Auth';
import { UserContext } from '../../contexts/UserContext';

export default function () {
  const { navigate } = useNavigation();
  const { dispatch } = useContext(UserContext);

  const checkToken = async () => {
    const token = await getItemAsync('token');
    if (token) {
      let res = await apiAuth.token(token);
      console.log('res', res);
      if (res.success) {
        const userData = await getItemAsync('user');
        dispatch({
          type: 'SET_USER',
          payload: {
            id: userData?.user?.id,
            email: userData?.user?.email,
            nome: userData?.user?.nome,
            dataNascimento: userData?.user?.dataNascimento,
            cpf: userData?.user?.cpf,
            telefone: userData?.user?.telefone,
          },
        });
        navigate('MainTab');
      } else {
        console.log(res.errors[0]);
      }
    }
    if (!token) {
      navigate('SignIn');
    }
  };
  useEffect(() => {
    setTimeout(() => {
      checkToken();
    }, 3000);
  }, []);

  return (
    <Container>
      <Logo width="216" height="83" />
      <LoadingIcon size="large" color={Colors.loadingLight} />
    </Container>
  );
}
