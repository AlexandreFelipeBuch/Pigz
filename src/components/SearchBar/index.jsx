import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Container, InputSearch } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';

const SearchBar = () => {
  return (
    <Container>
      <InputSearch />
      <Icon name="magnify" size={24} color={Colors.inputText} />
    </Container>
  );
};

export default SearchBar;
