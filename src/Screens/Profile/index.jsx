import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';
import { Container, ButtonExit, TextExit } from './styles';
import HeaderProfile from '../../components/HeaderProfile';
import ProfileList from '../../components/ProfileList';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';
import { removeItemAsync } from '../../utils';

export default () => {
  const { navigate } = useNavigation();
  const { state, dispatch } = useContext(UserContext);
  const handleLogout = () => {
    removeItemAsync('token', 'user');
    dispatch({ type: 'CLEAR_USER' });
    navigate('SignIn');
  };
  return (
    <Container>
      <HeaderProfile
        name={state.nome}
        email={state.email}
        imageUri="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      />
      <ProfileList />
      <ButtonExit onPress={handleLogout}>
        <Icons name="logout" size={28} color={Colors.primary} />
        <TextExit>Sair</TextExit>
      </ButtonExit>
    </Container>
  );
};
