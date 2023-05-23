import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import {
  Container,
  ContentItem,
  Images,
  ViewTitle,
  ViewDate,
  TextDate,
  ViewCity,
  TextCity,
  TextCities,
  TextDescription,
  ViewCityTitle,
  TextEmpty,
} from './styles';
import { dateMonthName } from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';

const Item = ({ title, state, city, date, image }) => (
  <ContentItem>
    <Images source={image} />
    <ViewTitle>
      <ViewDate>
        <TextDate>{dateMonthName(date)}</TextDate>
      </ViewDate>
      <TextDescription>{title}</TextDescription>
      <TextCities>{city}</TextCities>
    </ViewTitle>
  </ContentItem>
);

const Separator = () => <View style={{ height: 1, backgroundColor: 'lightgray' }} />;

const ListCity = ({ data }) => {
  const [cityData, setCityData] = useState([]);

  const organizeDataByCity = () => {
    const cities = [...new Set(data.map((item) => item.state))];
    const organizedData = cities.map((state) => {
      const cityItems = data.filter((item) => item.state === state);
      return { state, data: cityItems };
    });
    setCityData(organizedData);
  };

  useEffect(() => {
    organizeDataByCity();
  }, [data]); // Add data as a dependency to listen for changes to the prop

  const renderCity = ({ item }) => (
    <ViewCity>
      <ViewCityTitle>
        <Icon name="map-marker-outline" size={18} color={Colors.fontColorGray} />
        <TextCity>{item.state}</TextCity>
      </ViewCityTitle>
      <FlatList
        data={item.data}
        renderItem={({ item }) => (
          <Item title={item.title} city={item.city} date={item.date} image={item.image} />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Separator}
      />
    </ViewCity>
  );

  return (
    <Container>
      {cityData.length > 0 ? (
        <FlatList data={cityData} renderItem={renderCity} keyExtractor={(item) => item.state} />
      ) : (
        <TextEmpty>Nenhum evento encontrado!</TextEmpty>
      )}
    </Container>
  );
};
export default ListCity;
