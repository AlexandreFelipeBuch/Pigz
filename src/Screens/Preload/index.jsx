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
  const checkToken = async () => {
    navigate('SignIn');
  };
  useEffect(() => {
    setTimeout(() => {
      checkToken();
    }, 3000);
  }, []);

  return (
    <Container>
      <Logo width="180" height="60" />
      <LoadingIcon size="large" color={Colors.primary} />
    </Container>
  );
}
