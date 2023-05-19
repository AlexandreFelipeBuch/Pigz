import AsyncStorage from '@react-native-async-storage/async-storage';
import { format, parse } from 'date-fns';
import pt from 'date-fns/locale/pt';

export const setItemAsync = async (key, value) => {
  let strValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, strValue);
};

export const getItemAsync = async (key) => {
  let strValue = await AsyncStorage.getItem(key);
  let parsedValue = JSON.parse(strValue);
  return parsedValue;
};
export const getAllItemsAsync = () => {
  return AsyncStorage.getAllKeys();
};
export const removeItemAsync = (key) => {
  return AsyncStorage.removeItem(key);
};
export const invertDate = (date) => {
  const dataString = date;
  const data = new Date(dataString.split('/').reverse().join('-'));
  const dateFormat = data.toISOString().slice(0, 10);
  return dateFormat;
};
export const formatCpf = (cpf) => {
  const cpfs = cpf;
  const cpfFormatado = cpfs.replace(/\D/g, '');
  return cpfFormatado;
};
export const dateMonthName = (date) => {
  const parsedDate = parse(date, 'dd/MM/yyyy', new Date());
  const monthName = format(parsedDate, 'MMM', { locale: pt });
  const capitalizedMonthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  const formattedDate = format(parsedDate, 'dd', { locale: pt }) + ' ' + capitalizedMonthName;
  return formattedDate;
};
