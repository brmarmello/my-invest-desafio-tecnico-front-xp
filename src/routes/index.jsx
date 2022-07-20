import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import iAccount from '../pages/iAccount';
import Wallet from '../pages/Wallet';
import DepositWithdrawal from '../pages/DepositWithdrawal';
import buySell from '../pages/buySell';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="iAccount"
        component={iAccount}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DepositWithdrawal"
        component={DepositWithdrawal}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="buySell"
        component={buySell}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}