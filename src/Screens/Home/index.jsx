import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, ViewSearch } from './styles';
import Header from '../../components/Header';
import Carousel from '../../components/Carrossel';
import ListCity from '../../components/ListCity';
import SelectState from '../../components/SelectState';
import SearchBar from '../../components/SearchBar';
import { ScrollView, StyleSheet, View, VirtualizedList } from 'react-native';

const dados = [
  {
    id: '1',
    state: 'Rio de Janeiro',
    city: 'Rio de Janeiro',
    date: '16/05/2023',
    title: 'Praia de Copacabana',
    image: require('../../assets/image01.jpg'),
  },
  {
    id: '2',
    state: 'Rio de Janeiro',
    city: 'Niterói',
    date: '22/05/2023',
    title: 'Cristo Redentor',
    image: require('../../assets/image02.jpg'),
  },
  {
    id: '3',
    state: 'Rio de Janeiro',
    city: 'Angra dos Reis',
    date: '28/05/2023',
    title: 'Cristo Redentor',
    image: require('../../assets/image03.jpg'),
  },
  {
    id: '4',
    state: 'São Paulo',
    city: 'Bauru',
    date: '10/05/2023',
    title: 'Avenida Paulista',
    image: require('../../assets/image01.jpg'),
  },
  {
    id: '5',
    state: 'São Paulo',
    city: 'São Paulo',
    date: '11/05/2023',
    title: 'Parque Ibirapuera',
    image: require('../../assets/image02.jpg'),
  },
  {
    id: '6',
    state: 'São Paulo',
    city: 'São Paulo',
    date: '11/05/2023',
    title: 'Parque Ibirapuera',
    image: require('../../assets/image03.jpg'),
  },
  {
    id: '7',
    state: 'Distrito Federal',
    city: 'Brasilía',
    date: '10/05/2023',
    title: 'Congresso Nacional',
    image: require('../../assets/image01.jpg'),
  },
  {
    id: '8',
    state: 'Distrito Federal',
    city: 'Taguatinga',
    date: '11/05/2023',
    title: 'Palácio da Alvorada',
    image: require('../../assets/image01.jpg'),
  },
];
const images = [
  'https://alo.com.br/wp-content/uploads/2018/11/lollapalooza-brasil-2017-lineup-agambiarra-1170x480-1024x420.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTulf5b3XVMOtDhG2DSaWnSzXE3rqINMgStt33nwtem5Dn9yLHTaW_FeIjKs7mUbnW0pyw&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH1o_uJDGmmfAR-oYHSLTPfX4c8chSR0X0y2WiTBvOX2Gr9KkasJ0dGbsT-itlgdJSxpw&usqp=CAU',
];

export default () => {
  const { navigate } = useNavigation();
  const [estadoSelecionado, setEstadoSelecionado] = useState('Todos os Estados');
  const [filterState, setFilterState] = useState(dados);

  // Função que filtra os elementos de acordo com o estado selecionado
  const filtrarPorEstado = (estado) => {
    if (estado === 'Todos os Estados') {
      setFilterState(dados);
    } else {
      const filteredData = dados.filter((item) => item.state === estado);
      setFilterState(filteredData);
    }
  };
  // Chama a função de filtragem quando o estado selecionado mudar
  useEffect(() => {
    filtrarPorEstado(estadoSelecionado);
  }, [estadoSelecionado]);

  console.log('ESTADO', estadoSelecionado);
  console.log('ESTADOS-ITEMS', filterState);

  function handleEstadoSelecionado(estado) {
    setEstadoSelecionado(estado);
  }

  return (
    <Container>
      <Header logo />
      <ViewSearch>
        <SelectState onEstadoSelecionado={handleEstadoSelecionado} />
        <SearchBar />
      </ViewSearch>
      <VirtualizedList
        data={[{ type: 'carousel' }, { type: 'listCity' }]}
        renderItem={({ item }) => {
          switch (item.type) {
            case 'carousel':
              return <Carousel data={images} />;
            case 'listCity':
              return <ListCity data={filterState} />;
            default:
              return null;
          }
        }}
        keyExtractor={(item, index) => index.toString()}
        getItem={(data, index) => data[index]}
        getItemCount={(data) => data.length}
      />
    </Container>
  );
};
