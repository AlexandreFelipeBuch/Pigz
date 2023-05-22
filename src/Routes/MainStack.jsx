import { createStackNavigator } from '@react-navigation/stack';
import Preload from '../Screens/Preload';
import SignIn from '../Screens/SignIn';
import DeliveryScreen from '../Screens/DeliveryScreen';
import MainTab from '../Routes/MainTab';

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
    </Stack.Navigator>
  );
}
