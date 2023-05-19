import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../Screens/Preload';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import ForgotPassword from '../Screens/ForgotPassword';
import PasswordCode from '../Screens/PasswordCode';
import NewPassword from '../Screens/NewPassword';
import UpdateProfile from '../Screens/UpdateProfile';
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
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="PasswordCode" component={PasswordCode} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
    </Stack.Navigator>
  );
}
