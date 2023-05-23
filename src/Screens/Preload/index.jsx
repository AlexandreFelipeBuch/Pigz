import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
//--------------------------Configs---------------------------
import { Colors } from '../../config/Colors';
//--------------------------Components------------------------
import Logo from '../../assets/svg/pigz-logotipo-branco.svg';
import { Container, LoadingIcon } from './styles';

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
