import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import TelaLogin from '../screen/TelaLogin';
import TelaCadastro from '../screen/TelaCadastro';
import TelaTeste from '../screen/TelaTeste';


const Tab = createBottomTabNavigator();

export default function TabRoutes(){
  
  return (
    <Tab.Navigator screenOptions={{headerShown : false}}>
      <Tab.Screen
        name='Tela parte de cima'
        component={TelaLogin}
      />

      <Tab.Screen
        name='TelaCadastro'
        component={TelaCadastro}
      />

      <Tab.Screen 
        name='Tela teste'
        component={TelaTeste}
        
      />


    </Tab.Navigator>
  );
}

