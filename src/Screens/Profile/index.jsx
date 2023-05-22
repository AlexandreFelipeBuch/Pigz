import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, ButtonExit, TextExit } from './styles';
import HeaderProfile from '../../components/HeaderProfile';
import ProfileList from '../../components/ProfileList';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';

export default () => {
  const { navigate } = useNavigation();

  const handleLogout = () => {
    navigate('SignIn');
  };
  return (
    <Container>
      <HeaderProfile
        name={'Alexandre Felipe'}
        email={'felipe@gmail.com'}
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
