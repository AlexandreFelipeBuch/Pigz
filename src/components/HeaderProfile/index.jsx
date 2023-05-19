import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ButtonIcon,
  Icon,
  ViewLogo,
  ViewTextProfile,
  TextEmail,
  TextName,
} from './styles';
import { StyleSheet, Image } from 'react-native';

const HeaderProfile = ({ name, email, imageUri }) => {
  const { goBack } = useNavigation();
  const navigation = useNavigation();

  const handleOnPress = () => {
    if (iconName === 'menu') {
      navigation.toggleDrawer();
    } else {
      goBack();
    }
  };
  return (
    <Container>
      <ButtonIcon onPress={() => handleOnPress()}>
        <Icon name={'chevron-left'} />
      </ButtonIcon>
      <ViewLogo>
        <Image style={styles.image} source={{ uri: imageUri }} />
        <ViewTextProfile>
          <TextName>{name}</TextName>
          <TextEmail>{email}</TextEmail>
        </ViewTextProfile>
      </ViewLogo>
    </Container>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default HeaderProfile;
