import React, { useState, useEffect } from 'react';
import { Colors } from '../../config/Colors';
import { Container, Content, ViewInput, ViewSpace, View, Text, Image } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PasswordOptions = ({ openClose, password }) => {
  const regexNumber = new RegExp(/^(?=.*[0-9]).+$/);
  const regexLowercase = new RegExp(/^(?=.*[a-z]).+$/);
  const lengthSix = password?.length >= 8;
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (regexNumber.test(password) && regexLowercase.test(password) && lengthSix) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [password]);
  return (
    <Container>
      {openClose === 'close' && <ViewSpace />}
      {openClose === 'open' && (
        <Content>
          <View>
            <Text style={{ fontSize: 13, color: Colors.inputTexta }}>Sua senha deverá conter:</Text>
          </View>
          <ViewInput>
            <View>
              {regexLowercase.test(password) ? (
                <Icon name="checkbox-marked" size={18} color="green" />
              ) : (
                <Icon name="checkbox-marked" size={18} color="red" />
              )}
              <Text color={regexLowercase.test(password) ? 'green' : 'red'}>
                Pelo menos uma letra
              </Text>
            </View>
            <View>
              {regexNumber.test(password) ? (
                <Icon name="checkbox-marked" size={18} color="green" />
              ) : (
                <Icon name="checkbox-marked" size={18} color="red" />
              )}
              <Text color={regexNumber.test(password) ? 'green' : 'red'}>Pelo menos um número</Text>
            </View>
            <View>
              {password?.length >= 6 ? (
                <Icon name="checkbox-marked" size={18} color="green" />
              ) : (
                <Icon name="checkbox-marked" size={18} color="red" />
              )}
              <Text color={password?.length >= 6 ? 'green' : 'red'}>Mínimo de 8 caracteresa</Text>
            </View>
          </ViewInput>
        </Content>
      )}
    </Container>
  );
};

export default PasswordOptions;
