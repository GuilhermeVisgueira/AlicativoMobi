import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import TelaLogin from '../screen/TelaLogin';
import TelaCadastro from '../screen/TelaCadastro';


const Tab = createBottomTabNavigator();

export default function TabRoutes(){
  
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='TelaLogin'
        component={TelaLogin}
      />

      <Tab.Screen
        name='TelaCadastro'
        component={TelaCadastro}
      />

    </Tab.Navigator>
  );
}

