import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import TelaLogin from '../screen/TelaLogin';
import TelaCadastro from '../screen/TelaCadastro';
import StackRoutes from '../routes/StackRoutes';
import TelaTeste from '../screen/TelaTeste';
import TesteStyle from '../screen/TesteStyle'
import ListaEscolas from '../screen/ListaEscolas';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
  
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      
      
     <Tab.Screen
        name='Listagem'
        component={ListaEscolas}
      /> 

      <Tab.Screen 
        name='Cadastro'
        component={TelaCadastro}
        
      />


    </Tab.Navigator>
  );
}

