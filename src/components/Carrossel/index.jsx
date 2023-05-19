import React, { useState } from 'react';
import { View, FlatList, Dimensions, Image } from 'react-native';
import { Container, ImageCarrousel } from './styles';
const { width } = Dimensions.get('window');

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }) => <ImageCarrousel source={{ uri: item }} />;

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const currentIndex = event.nativeEvent.contentOffset.x / slideSize;
    setActiveIndex(currentIndex);
  };

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={handleScroll}
      />
    </Container>
  );
};

export default Carousel;
