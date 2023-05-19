import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, ButtonList, TextItem } from './styles';
import { Colors } from '../../config/Colors';

const ProfileList = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <ButtonList onPress={() => navigate('UpdateProfile')}>
        <Icons name="account-edit-outline" size={30} color={Colors.inputText} />
        <TextItem>Meus dados</TextItem>
        <Icons name="chevron-right" size={30} color={Colors.inputText} />
      </ButtonList>
      <View style={styles.line}></View>
      <ButtonList>
        <Icons name="shopping-outline" size={28} color={Colors.inputText} />
        <TextItem>Minhas Compras</TextItem>
        <Icons name="chevron-right" size={30} color={Colors.inputText} />
      </ButtonList>
      <View style={styles.line}></View>
      <ButtonList>
        <Icons name="help-circle-outline" size={28} color={Colors.inputText} />
        <TextItem>Ajuda</TextItem>
        <Icons name="chevron-right" size={30} color={Colors.inputText} />
      </ButtonList>
      <View style={styles.line}></View>
    </Container>
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: '100%',
    marginVertical: 10,
  },
});

export default ProfileList;
