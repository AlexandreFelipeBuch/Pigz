import React from 'react';
import { Container, ButtonPhoto, ImageBackgroundProfile, ViewImage, ImageProfile } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';
import { images } from '../../assets';

export function ImageAvatar({ uri, onPress }) {
  return (
    <Container>
      <ButtonPhoto onPress={onPress}>
        <ImageBackgroundProfile>
          <ViewImage>
            <ImageProfile
              resizeMode="cover"
              source={uri === 'image' ? images.avatar : { uri: uri?.uri ? uri.uri : uri }}
            />
            <Icon
              name="camera"
              size={15}
              color={Colors.gray}
              style={{
                position: 'absolute',
                left: 62,
                top: 70,
                height: 15,
                width: 15,
                backgroundColor: Colors.background,
                borderRadius: 50,
              }}
            />
          </ViewImage>
        </ImageBackgroundProfile>
      </ButtonPhoto>
    </Container>
  );
}
