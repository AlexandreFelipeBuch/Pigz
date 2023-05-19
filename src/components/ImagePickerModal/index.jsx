import React from 'react';
import {Container, ButtonIcon, ImageButton, TextButton} from './styles';
import Modal from 'react-native-modal';
import {images} from '../../assets';

export function ImagePickerModal({
  isVisible,
  onClose,
  onImageLibraryPress,
  onCameraPress,
}) {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={{justifyContent: 'flex-end', margin: 0}}>
      <Container>
        <ButtonIcon onPress={onImageLibraryPress}>
          <ImageButton source={images.image} />
          <TextButton>Galeria</TextButton>
        </ButtonIcon>
        <ButtonIcon onPress={onCameraPress}>
          <ImageButton source={images.camera} />
          <TextButton>Camera</TextButton>
        </ButtonIcon>
      </Container>
    </Modal>
  );
}
