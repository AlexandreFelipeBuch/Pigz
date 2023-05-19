import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import InputCustom from '../../components/InputCustom';
import { Colors } from '../../config/Colors';
import { Container, Scroller, ViewInput, TextInput } from './styles';
import { PERMISSIONS, request } from 'react-native-permissions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Header from '../../components/Header';
import { UserContext } from '../../contexts/UserContext';
import { ImageAvatar } from '../../components/ImageAvatar';
import { ImagePickerModal } from '../../components/ImagePickerModal';

export default () => {
  const { navigate } = useNavigation();
  const { state, dispatch } = useContext(UserContext);
  console.log('STATE', state);
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState('image');

  const onImageLibraryPress = async () => {
    try {
      const req = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
      );
      if (req === 'granted') {
        launchImageLibrary(
          {
            mediaType: 'photo',
            maxHeight: 720,
            maxWidth: 720,
            includeBase64: true,
          },
          (imageObj) => {
            if (imageObj.didCancel) {
              return;
            }
            setVisible(false);
            setImage(imageObj.assets[0]);
          }
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
  const onCameraPress = async () => {
    try {
      const req = await request(
        Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA
      );

      if (req === 'granted') {
        launchCamera(
          {
            mediaType: 'photo',
            maxHeight: 720,
            maxWidth: 720,
            includeBase64: true,
          },
          (imageObj) => {
            if (imageObj.didCancel) {
              return;
            }

            setVisible(false);
            setImage(imageObj?.assets[0]);
          }
        );
      } else {
        Alert.alert(t('alert_title_information'), t('alert_msg_camera'));
      }
    } catch (error) {
      console.error('UPDATE::HANDLE_CAMERA', error);
    }
  };

  return (
    <Container>
      <Header icon iconName={'chevron-left'} title textTitle={'Meus Dados'} />
      <Scroller>
        <ImagePickerModal
          isVisible={visible}
          onClose={() => setVisible(false)}
          onImageLibraryPress={onImageLibraryPress}
          onCameraPress={onCameraPress}
        />
        <ImageAvatar uri={image} onPress={() => setVisible(true)} />
        <ViewInput>
          <TextInput>Nome completo</TextInput>
          <InputCustom
            value={state?.nome}
            iconEdit={'pencil-lock-outline'}
            editable={false}
            inputEdit
            inputSimple
            borderColor={Colors.inputBorder}
          />
          <TextInput>CPF</TextInput>
          <InputCustom
            iconEdit={'pencil-lock-outline'}
            editable={false}
            inputEdit
            inputMasked
            type={'cpf'}
            options={{ mask: '999.999.999-99' }}
            value={state?.cpf}
            keyboardType={'numeric'}
            borderColor={Colors.inputBorder}
          />
          <TextInput>Data de nascimento</TextInput>
          <InputCustom
            iconEdit={'pencil-lock-outline'}
            editable={false}
            inputEdit
            inputMasked
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            keyboardType={'numeric'}
            value={state?.dataNascimento}
            borderColor={Colors.inputBorder}
          />

          <TextInput>Telefone*</TextInput>
          <InputCustom
            iconEdit={'pencil-outline'}
            editable={false}
            inputEdit
            inputMasked
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99)',
            }}
            keyboardType={'numeric'}
            value={state?.telefone}
            maxLength={16}
            borderColor={Colors.inputBorder}
          />
          <TextInput>E-mail*</TextInput>
          <InputCustom
            iconEdit={'pencil-outline'}
            editable={false}
            inputEdit
            inputSimple
            value={state?.email}
            borderColor={Colors.inputBorder}
          />
          <TextInput>Senha*</TextInput>
          <InputCustom
            inputSimple
            editable={false}
            iconEdit={'pencil-outline'}
            inputEdit
            value={'*********'}
            borderColor={Colors.inputBorder}
          />
        </ViewInput>
      </Scroller>
    </Container>
  );
};
