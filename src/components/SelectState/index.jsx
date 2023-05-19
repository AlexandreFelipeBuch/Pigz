import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList } from 'react-native';
import { TextState, ViewText, ButtonClose, TextItem } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';
const SelectState = ({ onEstadoSelecionado }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedState, setSelectedState] = useState(null);
  const [estados, setEstados] = useState([
    { sigla: 'TD', nome: 'Todos os Estados' },
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ paddingVertical: 8, paddingHorizontal: 16 }}
      onPress={() => {
        onEstadoSelecionado(item.nome);
        setSelectedState(item.nome);
        setModalVisible(false);
      }}
    >
      <TextItem>{item.nome}</TextItem>
    </TouchableOpacity>
  );

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        {selectedState !== null ? (
          <ViewText>
            <TextState>{selectedState}</TextState>
            <Icon name="chevron-down" size={30} color={Colors.inputText} />
          </ViewText>
        ) : (
          <ViewText>
            <TextState>Todos os estados</TextState>
            <Icon name="chevron-down" size={30} color={Colors.inputText} />
          </ViewText>
        )}
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <FlatList
          data={estados}
          renderItem={renderItem}
          keyExtractor={(item) => item.sigla}
          ListHeaderComponent={() => (
            <ButtonClose onPress={() => setModalVisible(false)}>
              <Icon name="close-circle" size={28} color={Colors.primary} />
            </ButtonClose>
          )}
        />
      </Modal>
    </View>
  );
};
export default SelectState;
